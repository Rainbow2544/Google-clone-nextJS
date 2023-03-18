import React from 'react';

export default function Loading() {
    const box = (<div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
                    <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
                </div>);
    const boxArr = new Array(5).fill(box);
    return (
      <>
          {boxArr.map((box) => box)}  
      </>
    )
  }
