
import React from 'react'

function UserProfileCard() {
  return (
    <div className='flex flex-row items-center bg-gray-100 p-2 rounded-lg shadow-md'>
        <div>
            <img className='w-16 h-16 rounded-full border border-gray-200'
            src="https://htmlstream.com/preview/unify-v2.6.2/assets/img-temp/400x450/img5.jpg" alt=""  />
        </div>
        <div className='flex flex-col justify-center  items-start ml-3'>
            <p style={{fontFamily: 'Libre Bodoni', fontWeight: 'bold'}} className='text-[40px] '>Cavidan Bagiri</p>
            <p style={{fontFamily: 'IBM Plex mono'}} className='text-sm text-gray-500 ml-1 -mt-1'>Warehouse Staff</p>
        </div>
    </div>
  )
}

export default UserProfileCard
