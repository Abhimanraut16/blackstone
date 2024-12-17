'use client'
import React, { useState } from 'react'
import BuyProduct from '../BuyProduct/BuyProduct'

function Button() {
  const [showModel, setShowModel] = useState(false)
  return (
    <>
      <div onClick={() =>
        setShowModel(true)
      } className="ml-20  border-2 border-lemon text-white px-6 py-2 rounded-md hover:bg-lemon hover:text-black font-medium shadow-md transform transition hover:scale-105  focus:ring-4 focus:ring-blue-300 focus:outline-non ">
        Order Now
      </div>
      <BuyProduct isVisible={showModel} onClose={() => setShowModel(false)} />
    </>
  )
}

export default Button