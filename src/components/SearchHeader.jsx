import React from 'react'
import SearchHeaderOptions from './SearchHeaderOptions'
import Link from 'next/link';
import {TbGridDots} from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";
import Image from 'next/image';
import SearchBox from './SearchBox';

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
        <div className='flex w-full p-6  justify-between'>
            <Link href={"/"}>
            <Image
                width="120"
                height="40"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            />
            </Link>

            <div className="flex-1">
                <SearchBox />
            </div>
            <div className='hidden md:inline-flex '>
                <RiSettings3Line className="header-icon" />
                <TbGridDots className='header-icon'/>
            </div>
            
            <button className='py-2 px-6 rounded-md ml-3 bg-blue-500 hover:brightness-105 hover:shadow-md transition-shadow text-white'>
                Sign in
            </button>
        </div>
        <SearchHeaderOptions />
    </header>
  )
}
