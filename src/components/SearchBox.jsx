import React, { useState } from 'react';
import { useSearchParams,useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox() {
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const [input, setInput] = useState(searchTerm);
    
    function onChangeHandle(event){
        setInput(event.target.value);
    }
    function onSubmitHandle(event){
        event.preventDefault;
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }
  return (
    
    <form className='flex  items-center ml-10 mr-5 shadow-md hover:shadow-lg max-w-3xl rounded-full border border-gray-200  px-6 py-3'
        onSubmit={onSubmitHandle}
    >
        <input 
            type="text"
            className='w-full focus:outline-none'
            onChange={onChangeHandle}
            value={input}
        />
        <RxCross2
            className="text-2xl text-gray-500 cursor-pointer sm:mr-3 pr-2 text-3xl border-r-2 border-gray-300"
            onClick={() => setInput("")}
        />
        <BsFillMicFill className='hidden sm:inline-flex  text-blue-500 mr-4  text-2xl cursor-pointer'/>
        
        <AiOutlineSearch 
            className='hidden sm:inline-flex text-blue-500 text-3xl cursor-pointer'
            onClick={onSubmitHandle}
        />
        
        
        
    </form>
    
  )
}
