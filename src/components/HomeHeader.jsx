import Link from 'next/link';
import React from 'react';
import {TbGridDots} from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex  space-x-3 items-center'>
        <Link href="https://mail.google.com" 
          className='hover:underline'> 
          Gmail
        </Link>
        <Link href="https://images.google.com/" 
          className='hover:underline'> 
          images
        </Link>
      </div>
      <TbGridDots className='bg-transparent text-4xl ml-3 p-2 hover:bg-gray-200 rounded-full'/>
      <button className='py-2 px-6 rounded-lg ml-3 bg-blue-500 hover:brightness-105 hover:shadow-md transition-shadow text-white'>
        Sign in</button>
    </header>
  )
}
