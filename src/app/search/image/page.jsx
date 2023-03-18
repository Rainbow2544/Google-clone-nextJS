export const dynamic = "force-dynamic";

import PaginationButtons from '@/components/PaginationButtons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
  const index = searchParams.start ? parseInt(searchParams.start): 1;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${index}`
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const searchResults = data.items;
  

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
        <Image  alt="image"
          src='https://timgm.eprice.com.tw/tw/nb/img/2021-11/12/5678235/eprice_1_cc8e198aa31956a3e7254f9962d06bfc.jpg'/>
      </div>
    );
  }
  return (
    <div className='sm:pb-24 pb-40 mx-10 mt-4 '>
      <div className='gap-x-20 gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6'>
        {searchResults && 
          searchResults.map((data) => (
            <div className='mb-8' key={data.title}>
              <Link href={data.link}>
                <Image src={data.link} alt={data.title} 
                  className="h-60 rounded-lg hover:shadow-2xl hover:border-2 hover:border-gray-200"
                />
              </Link>
              <Link href={data.image.contextLink}>
                <p className='text-xs hover:underline'>{data.displayLink}</p>
              </Link>
              <Link href={data.image.contextLink}>
                <p className=' truncate hover:underline'>{data.title}</p>
              </Link>
            </div>
          ))}
      </div>
      <div>
        <PaginationButtons />
      </div>
    </div>
  )
}
