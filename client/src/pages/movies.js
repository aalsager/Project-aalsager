import React, { useEffect, useState } from 'react';
const URL = process.env.REACT_APP_URL;

export default function Movies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + '/movies', {
                    headers: {
                        'Authorization': localStorage.getItem('auth-token')
                    }
                });
                const data = await response.json();

            
                const sortedMovies = data.sort((a, b) => b.rating - a.rating);

                setMovies(sortedMovies);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        loading ? <div>Loading...</div> :
        <div className='w-full grid grid-cols-4 gap-8 px-4 py-8'>
            {movies.map(movie => (
                <div className='border-2 h-[50vh] bg-slate-700 flex flex-col' key={movie.id}>
                    <div className='flex-grow bg-slate-800 border'>
                        <img alt='movie-poster' src={movie.imageUrl} className='h-full w-full'></img>
                    </div>
                    <div className='p-2'>
                        <h4 className='text-lg font-semibold'>
                            {movie.title}
                        </h4>
                        <div className='text-sm'>
                            {(new Date(movie.releaseDate)).toDateString()}
                        </div>
                        <div className='text-sm font-bold'>
                            Rating: {movie.rating} / 10
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
