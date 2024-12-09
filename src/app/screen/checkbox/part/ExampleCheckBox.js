import React from 'react'

function ExampleCheckBox() {
  return (
    <div className='flex justify-center items-center h-full w-full'>

        <div className='grid grid-rows-1 grid-cols-3'>

            <div className='flex items-center'>
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <h1 className='ml-2'>checkbox-1</h1>
            </div>

            <div className='flex items-center ml-5'>
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <h1 className='ml-2'>checkbox-2</h1>
            </div>

            <div className='flex items-center ml-10'>
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <h1 className='ml-2'>checkbox-3</h1>
            </div>

        </div>

    </div>
  )
}

export default ExampleCheckBox