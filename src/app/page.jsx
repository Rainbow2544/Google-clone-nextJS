import HomeHeader from '@/components/HomeHeader';
import React from 'react';
import Image from "next/image";
import HomeSearch from '@/components/HomeSearch';


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex items-center flex-col mt-14 '>
        <Image width="280" height="100" alt='google'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" />
        <HomeSearch />
      </div>
      
      </>
  )
}

