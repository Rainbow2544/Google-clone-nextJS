import React from 'react'

export default function loading() {
  const box = (<div className="animate-pulse">
                <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
                <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
              </div>);
  const boxArr = new Array(10).fill(box);
  return (
    <div className='sm:pb-24 pb-40 mx-10 mt-4 '>
      <div className="gap-x-20 gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6" >
        {boxArr.map((box, index) => (
          <div key={index} className="flex justify-center items-center">
            {box}
          </div>
        ))}
    </div>
  </div>
  )
}
