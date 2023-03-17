
import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  
  
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const searchResults = data.items;
  console.log(searchResults);

  if(!searchResults){
    return(
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the{" "} 
          <Link href="/" className="text-blue-500">
             Home 
          </Link>
          {" "} page.
        </p>
      </div>
    );
  }
  return (
    <>
      
      {searchResults && 
        searchResults.map((data) => (
          <div className='p-3 mx-[200px] mt-3 w-[600px]'>
            
            <h1 className='text-blue-700 text-lg hover:underline truncate '
              ><a href={data.link}>{data.title}</a></h1>
              <p className='text-xs mb-2'>{data.link}</p>
              <p className='text-gray-600'>{data.snippet}</p>
              
          </div>
          

        ))}
    </>
    
  )
}
