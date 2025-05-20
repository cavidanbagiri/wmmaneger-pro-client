
import React from 'react'

const Login = () => {
  return (
    <div style={{fontFamily: 'IBM Plex mono'}} className=' flex flex-col justify-center items-center h-screen'>
      <div className='w-96 h-1/2 flex flex-col items-center justify-evenly rounded-md shadow-xl border border-gray-100 p-3'>
        <div>
          <span className='text-[55px] font-bold'>Sign in</span>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-gray-500 mb-2'>Username or Email</span>
          <input type="text" className='outline-none text-black border border-gray-200 w-84 p-2 rounded-md hover:border-gray-300 duration-200' />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-gray-500 mb-2'>Password</span>
          <input type="password" className='outline-none text-black border border-gray-200 w-84 p-2 rounded-md hover:border-gray-300 duration-200' />
        </div>
        <div>
          <button className='bg-slate-800 text-white w-84 py-3 rounded-md text-lg cursor-pointer hover:bg-slate-700 duration-200'>
            Login
          </button>
        </div>
        <div className='w-full text-right'>
          <span style={{fontFamily: 'IBM Plex mono'}} className='text-xs w-full underline text-blue-400 cursor-pointer hover:shadow-lg duration-200'>
            Forget password. Write to admin
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
