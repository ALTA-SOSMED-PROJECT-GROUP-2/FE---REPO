import { Button } from "@/components/ui/button";
import React from "react";
import logo from "@/assets/Chirpy.svg";

const Register = () => {
  return (
    <div className='h-screen bg-sage4 flex flex-col justify-center items-center'>
      <form className='flex flex-col w-full md:w-1/3 bg-white rounded-md p-8'>
        <img
          //   className=' -mt-28'
          src={logo}
          alt="Chirpy Logo"
        />
        <p className="mt-2 sm:mt-3 text-center">Buat akun untuk pengalaman terbaru. </p>
        <input
          placeholder="Email"
          type="email"
           className='p-3 bg-gray-100 rounded-md mt-4 sm:mt-8'
        />
        <input
          placeholder="Phone Number"
          type="tel"
           className='p-3 bg-gray-100 rounded-md mt-4 sm:mt-8'
        />
        <input
          placeholder="Full Name"
          type="text"
           className='p-3 bg-gray-100 rounded-md mt-4 sm:mt-8'
        />
        <input
          placeholder="Username"
          type="text"
           className='p-3 bg-gray-100 rounded-md mt-4 sm:mt-8'
        />
        <input
          placeholder="Password"
          type="password"
           className='p-3 bg-gray-100 rounded-md mt-4 sm:mt-8'
        />
        <Button className='mx-4 sm:mx-8 mt-6 sm:mt-8 bg-sage3 hover:bg-sage2'>Register</Button>
        <p className='mt-2 sm:mt-3 text-center text-sm'>
          Do you have an account? <span className="text-sage1">Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
