"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function HomeSearch() {
    const [input, setInput] = useState("");
    const [hovered, setHovered] = useState(false);
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    function onChangeHandle(event){
        setInput(event.target.value);
    }

    function onSubmitHandle(event){
        event.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }
    async function randomSearch() {
        setRandomSearchLoading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word")
          .then((res) => res.json())
          .then((data) => data[0]);
        if (!response) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandomSearchLoading(false);
      }
  return (
    < >
        <form
        onSubmit={onSubmitHandle}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch onClick={onSubmitHandle}  className=" cursor-pointer text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow  focus:outline-none"
          onChange={onChangeHandle}
          value={input}
        />
        <div className="relative">
          <BsFillMicFill
            className="text-lg cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          {hovered && (
            <div className="absolute bottom-full left-2  transform -translate-x-1/2 -mb-2 bg-gray-800 text-white text-center py-1 px-2 rounded-md whitespace-nowrap">
              Search by voice
            </div>
          )}
        </div>
        
      </form>

      <div className='flex mt-10 space-y-2 sm:space-y-0 sm:space-x-4 justify-center'>
            <button onClick={onSubmitHandle} className="btn">
                Google Search
            </button>
            
            <button 
            onClick={randomSearch} 
            disabled={randomSearchLoading}
            className="btn"
            >
            {randomSearchLoading ?
                <Image
                src="https://freesvg.org/img/1544764567.png"
                alt="loading"
                className="h-6 ml-14 text-center"
            />
            :("I'm' Feeling Lucky")
            }
            </button>
        </div>
    </>
  )
}
