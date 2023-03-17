import SearchHeader from '@/components/SearchHeader'
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  
  
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await response.json();
  const searchResults = data.items;
  return (
    <>
      <SearchHeader/>
      {searchResults && 
        searchResults.map((data) => (
          <div className='p-3'>
            <p className='text-sm'>{data.link}</p>
            <h1 className='text-blue-600 text-xl hover:underline'
              ><a href={data.link}>{data.title}</a></h1>
          </div>
          

        ))}
    </>
    
  )
}
