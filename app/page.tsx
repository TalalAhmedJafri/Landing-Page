
export default function Home() {
  return (
   <div className='bg-white'>
  <div>
  <section className=" text-black h-80 flex items-center justify-center">
      <div className="text-center max-w-3xl px-3 ">
        <h1 className="text-5xl font-bold mb-4 font-serif ">Welcome to Our Website</h1>
        <p className="text-lg mb-6 font-mono">Discover Our amazing Work and services.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >Learn More</button>
      </div>
    </section>
      <section className=" text-black h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="font-semibold mb-4 text-5xl font-serif"> About Us</h1>
          <p className="text-lg mb-6 p-6 font-mono">
            We are a agency based in Pakistan 
            and we are offering services of
          </p>
          <div className='font-semibold align-middle'>
          <div className='flex items-center space-x-20'>    
         <p> <img src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="About Us" className="mt-4 rounded-lg shadow-2xl max-w-full min-auto" /> Web Development</p>      
         <p> <img src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHwwfDB8fHww" alt="About Us" className="mt-4 rounded-lg shadow-lg max-w-full h-auto" /> Graphic Designing</p>
          </div>
          <div className='flex items-center space-x-20'>
         <p> <img src="https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="About Us" className="mt-4 rounded-lg shadow-lg max-w-full h-auto" /> Video Editing</p>
         <p> <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="About Us" className="mt-4 rounded-lg shadow-lg max-w-full h-auto" /> Marketing</p>
          </div>
          </div>
        </div>
      </section>
      <section className=" text-black h-80 flex items-center justify-center ">
        <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4 font-serif "> Our Portfolio</h1>
        <div className="flex items-center justify-center space-x-6 font-mono font-semibold">
       <button className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >
      <a href="https://static-resume-pi-navy.vercel.app/">Static Resume</a>
        </button>
        <button className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >
         Web Development
        </button>
        <button className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >
         Graphic Designing
        </button>
        <button className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >
          Video Editing
        </button>
        <button className="bg-blue-500 text-white px-10 py-5 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 shadow-lg" >
          Marketing
        </button>
        </div>
       </div>
      </section>
   </div>
  </div>
  )
}
