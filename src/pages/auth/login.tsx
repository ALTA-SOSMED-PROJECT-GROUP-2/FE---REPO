import { Button } from '@/components/ui/button';
import React from 'react';
import logo from '@/assets/Chirpy.svg';

const Login = () => {
  return (
    <div className='w-full h-screen bg-sage4 flex flex-col justify-center items-center'>
      <form className='flex flex-col w-1/3 bg-white rounded-md p-8'>
        <img
          className=' -mt-28'
          src={logo}
          alt='Chirpy Logo'
        />
        <input placeholder='Phone Number, Full Name or Email' type='email' className='p-3 bg-gray-100 rounded-md mt-8' />
        <input placeholder='Password' type='password' className='p-3 bg-gray-100 rounded-md mt-8' />
        <p className='mt-3 text-sage1'>Forgot Password?</p>
        <Button className='mx-8 mt-8 bg-sage3 hover:bg-sage2'>Login</Button>
        <p className='mt-3 text-center'>Don't have an account? <span className='text-sage1'>Sign Up</span></p>
      </form>
    </div>
  );
};

export default Login;
