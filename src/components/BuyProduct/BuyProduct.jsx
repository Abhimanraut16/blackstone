import Order from '@/app/Order/page';
import React from 'react'

function BuyProduct({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleCLose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (

    <div className=' z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleCLose} >
      <div className="w-[700px] flex flex-col">
        <button className='text-white text-xl place-self-end' onClick={() => onClose()} >X</button>
        <div className="bg-white p-2 "> <Order /> </div>
      </div>
    </div >

  )
}

export default BuyProduct