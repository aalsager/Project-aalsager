import { Link } from "react-router-dom";

export default function Navbar(){

    function handleLogout() {
        localStorage.removeItem('auth-token')
        window.location = '/signin'
    }

    return (
        <nav className="w-full bg-black flex justify-between gap-4">
            <div className='flex items-center'>
                <Link href='/' className='p-2 font-bold'>Home</Link>
            </div>

            <span onClick={handleLogout} className="p-4 hover:bg-gray-800">
                Signout
            </span>
        </nav>
    )
}