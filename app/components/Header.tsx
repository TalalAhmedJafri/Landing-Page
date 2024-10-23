const links= ["Pricing" , "ContactUs"];
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';




export default function Header () {
    library.add (faTrain)
    return (
    <nav className='bg-gradient-to-r from-emerald-900 to-emerald-600 text-white p-10 text-center flex justify-between items-center'>
      <div className='flex items-center space-x-3'>
        <FontAwesomeIcon icon="fa-solid fa-train" className='size-8' />
        <p className='font-bold font-mono '>Pixel Train</p>
        </div>
        <ul className='flex gap-6 list-none  text-white font-semibold font-mono'>
            {links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
        </ul>
    </nav>

    )
}