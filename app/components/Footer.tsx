import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    library.add (fab);
  library.add (faEnvelope)
  library.add(faPhone)
return (
    <div>
    <footer className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white py-4 px-6 text-center">
 
    
    <div className='flex justify-center space-x-4 '>
    <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faPhone} className='size-9' />
          </a>
      <a href="https://www.instagram.com/pixel_train_express/" className="text-pink-500 hover:text-purple-500">
        <FontAwesomeIcon icon="fa-brands fa-instagram" className='size-10 ' />
      </a>
      <a href="mailto:pixeltrainexpress@email.com" className="text-red-400 hover:text-red-600">
        <FontAwesomeIcon icon="fa-solid fa-envelope" className='size-10' />
      </a>
    
    </div>
    <p className="mt-2">&copy; 2024 Pixel Train</p>
  </footer>
    
    </div>
)
}