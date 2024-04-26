import React, { useEffect, useState } from "react";

export default function Movies(){
    const [loading, setLoader] = useState(true)
    const [movies, setMovies] = useState([])

    useEffect(() => {

    }, [])

    return (
        loading ? <div>Loading....</div>
    :
    <div>
        {movies.map(({title}) => (
            <div key={title}>
                {title}
            </div>
        ))}
    </div>
    )
}