import React from 'react'

const BookingDetails = () => {
  return (
    <div className='flex justify-between bg-white p-5 rounded-b-xl '>
        <h3 className='w-1/6'>Dhaka</h3>
        <h3 className='w-1/6'>Rajshahi</h3>
        <h3 className='w-1/6 text-center'>11-10-2024</h3>
        <h3 className='w-1/6 text-center'>2</h3>
        <h3 className='w-1/6 text-center'>Economy</h3>
        <button className='w-1/6 text-center '>
        <span className="bi bi-trash bg-gray-200 p-2 text-red-600 hover:bg-red-600 hover:text-white duration-150 rounded-sm"></span>
        </button>
    </div>
  )
}

export default BookingDetails