import React from "react"
import '../App.css'

const footer = () => {
    return (
        <>
  <footer className="bg-blue-900 mt-10">
  <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/3 text-center md:text-left">
    <img src="logojobsku.png" alt="Logo JobsKU" className="w-auto h-8 md:h-10 mr-2 md:mr-4" />
    </div>
    <div className="flex flex-col md:flex-row items-center">
      <a href="#" className="text-white hover:text-gray-400 py-2 px-4 md:py-0 md:px-6">About Us</a>
      <a href="#" className="text-white hover:text-gray-400 py-2 px-4 md:py-0 md:px-6">Kontak</a>
      <a href="#" className="text-white hover:text-gray-400 py-2 px-4 md:py-0 md:px-6">FAQ</a>
    </div>
  </div>
</footer>


</>

)
}

export default footer