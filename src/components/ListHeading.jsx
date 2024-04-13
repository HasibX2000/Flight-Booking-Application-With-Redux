import React from 'react'

const ListHeading = () => {
  return (
    <div className='flex justify-between bg-gray-100 p-5 rounded-t-xl font-bold'>
        <h2 className='w-1/6'>DESTINATION FROM</h2>
        <h2 className='w-1/6'>DESTINATION TO</h2>
        <h2 className='w-1/6 text-center'>JOURNEY DATE</h2>
        <h2 className='w-1/6 text-center'>GUESTS</h2>
        <h2 className='w-1/6 text-center'>CLASS</h2>
        <h2 className='w-1/6 text-center'>DELETE</h2>
    </div>
  )
}

export default ListHeading