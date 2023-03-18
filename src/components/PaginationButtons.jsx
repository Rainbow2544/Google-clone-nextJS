"use client"

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';



export default function PaginationButtons() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const name = pathname.includes("web")? "web":"image";
  
  let index = searchParams.get("start")? parseInt(searchParams.get("start")) : 1;
  

  return (
    <div>
      
      {index === 1 && 
      <Link  href={`/search/${name}?searchTerm=${searchTerm}&start=${index+10}`}  >
        <button 
          className='ml-5 text-blue-700 hover:underline'>
          Next{" >>>"}
          </button>
        </Link>
        }
      {index > 1 && 
        <div className='ml-5 space-x-20'>
          <Link  href={`/search/${name}?searchTerm=${searchTerm}&start=${index-10}`}  >
            <button 
              className='text-blue-700 hover:underline'>
            {"<<< "}Prev
            </button>
          </Link>
          <Link  href={`/search/${name}?searchTerm=${searchTerm}&start=${index+10}`}  >
            <button 
              className='text-blue-700 hover:underline'>
              Next{" >>>"}
              </button>
          </Link> 
        </div>}
      
      
    </div>
  )
}
