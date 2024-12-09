import React from 'react'

function ExampleButton() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className='grid grid-rows-1 grid-cols-4 gap-4'>

            <button className='w-20 h-8 rounded-sm bg-orange-500'>Hallo</button>
            <button className='w-24 h-10 rounded-md bg-orange-500 font-medium'>Hallo</button>
            <button className='w-28 h-12 rounded-lg bg-orange-500 font-semibold'>Hallo</button>
            <button className='w-32 h-14 rounded-xl bg-orange-500 font-bold'>Hallo</button>


        </div>
    </div>
  )
}

export default ExampleButton