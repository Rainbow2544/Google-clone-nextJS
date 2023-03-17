
import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    //console.log(response);
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const searchResults = data.items;
  console.log(data);

  //when there is no results
  if(!searchResults){
    return(
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-2xl mb-4">Your search - {searchParams.searchTerm} - did not match any documents.</h1>
        <p className="text-lg">
          Try to search for something else or go back to the{" "} 
          <Link href="/" className="text-blue-500">
             Home 
          </Link>
          {" "} page.
        </p>
        <img src='https://timgm.eprice.com.tw/tw/nb/img/2021-11/12/5678235/eprice_1_cc8e198aa31956a3e7254f9962d06bfc.jpg'/>
      </div>
    );
  }
  return (
    <div className='sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className=' mt-3 text-sm text-gray-600'>
        About {data.searchInformation?.formattedTotalResults} results
        ({data.searchInformation?.formattedSearchTime} seconds)
      </p>
      {searchResults && 
        searchResults.map((data) => (
          <div className=' my-6 w-[650px]'>
            
            <h1 className='text-blue-700 text-lg hover:underline truncate '
              ><a href={data.link}>{data.title}</a></h1>
              <p className='text-xs mb-2'>{data.link}</p>
              <p className='text-gray-600 text-sm'>{data.snippet}</p>
              
          </div>
          

        ))}
    </div>
    
  )
}
