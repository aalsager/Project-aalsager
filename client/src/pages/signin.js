import React, { useState } from "react";

const URL = process.env.REACT_APP_URL

export default function SignIn(){
    const [form, setForm] = useState({
        username: '',
        password: '',
    })


    function handleSubmit(){
        fetch(`${URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then((res) => {
            // Check for HTTP status 200 (OK)
            if(res.status === 200){
                res.json().then(payload => {
                    console.log(payload)
                    
                    localStorage.setItem('auth-token', payload.token)
                    window.location.href = '/'
                })
            }else{
                console.log(res)
            }
        }).catch((err) => console.log(err))
    }
    // Render the sign-in form
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <h2 className="text-xl mb-4 font-semibold">Sign In</h2>
            {['username', 'password'].map(key => (
                <div className="mb-6" key={key}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{key}</label>
                    <input type={key} value={form[key]} onChange={(e) => setForm({...form, [key]: e.target.value})} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            ))}
            <button onClick={handleSubmit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Signin
            </button>
            <p className="text-sm">
                Dont have an account? <a className='underline text-red-800' href='/signup'>Sign Up</a>
            </p>
        </div>
    )
}