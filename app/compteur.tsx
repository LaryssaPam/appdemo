"use client";
import React, { useState } from 'react'

function Compteur() {
    /* Initialisation du state*/
    const [nombre, setnombre] = useState(0);
    /* Imcrementation*/
    const increment = () => {setnombre(nombre +1) }
    /* decrementation*/
    const decrement = () => { setnombre(nombre-1) }
       /* reset*/
    const reset = () => { }
  return (
    <div className='bg-white p-8 rounded-2xl shadow-lg flex items-center text-black '>

        <button onClick={decrement} className='w-12 h12 rounded-full bg-amber-950 text-white font-bold hover:bg-red-600 transition flex items-center justify-center'>-</button>
        <span className='text-4xl font-mono font-bold w-16' text-center text-gray-800>{nombre}</span>
        <button  onClick={increment}className='w-12 h12 rounded-full bg-amber-950 text-white font-bold hover:bg-green-600 transition flex items-center justify-center'>+</button>
    </div>
   
  )
}

export default Compteur