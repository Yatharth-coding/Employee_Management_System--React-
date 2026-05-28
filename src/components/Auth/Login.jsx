import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault() ;
        console.log("Email is" , email);
        console.log("Password is" , password);
        handleLogin(email, password) ;
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <form
        onSubmit={(e)=>{submitHandler(e)}} 
        className='flex flex-col w-[450px] border-2 border-emerald-200 rounded-xl p-20'>
            <input 
                value={email}

                onChange={(e)=>{
                setEmail(e.target.value)
                }}
                required
                type="email" 
                placeholder='Enter your email' 
                className=' text-large font-medium  border-[1px] px-3 py-3 mb-5 border-emerald-400 rounded-full placeholder:text-gray-400' 
            />
            <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                    }}
                required
                type="password" 
                placeholder='Enter your password' 
                className='text-large font-medium px-3 py-3 mb-5 border-[1px] border-emerald-600 rounded-full placeholder:text-gray-400'
            />
            <button className='bg-emerald-400 rounded-full px-3 py-4 mt-7 border-none text-large w-full hover:bg-emerald-700'>Log in</button>
        </form>
        
    </div>
  )
}

export default Login
