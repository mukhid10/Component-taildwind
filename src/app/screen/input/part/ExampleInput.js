import React from 'react'

function ExampleInput() {
  return (
    <div>
        <div className='grid grid-rows-8'>

            <input type="text" placeholder="Required input" required className="border-2 required:border-red-500 p-2 rounded-md" />
            <input type="email" placeholder="Valid email" className="border-2 valid:border-green-500 p-2 rounded-md mt-2" />
            <input type="text" pattern="[A-Za-z]+" placeholder="Letters only" className="border-2 invalid:border-red-500 p-2 rounded-md mt-2" />
            <input type="number" min="1" max="5" placeholder="Number 1-5" className="border-2 in-range:border-green-500 p-2 rounded-md mt-2" />
            <input type='number' min="1" max="5" placeholder="Number 1-5" className="border-2 out-of-range:border-red-500 p-2 rounded-md mt-2" />
            <input type='text' placeholder="Example" className="border-2 placeholder-shown:border-gray-500 p-2 rounded-md mt-2" />
            <input type='text' placeholder='autofill' className="border-2 autofill:bg-yellow-200 p-2 rounded-md mt-2" />
            <input type='text' placeholder='Read Only' readOnly className="border-2 read-only:bg-gray-100 p-2 rounded-md mt-2" />

        </div>
    </div>
  )
}

export default ExampleInput