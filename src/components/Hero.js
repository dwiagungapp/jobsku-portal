import React from "react";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
      <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Selamat Datang di <span className="text-blue-900">JobsKu</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Temukan lowongan pekerjaan impian Anda dan tingkatkan karir Anda bersama kami.
          </p>

          <Link to="/lowongan">
            <button className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800">
              Cari Pekerjaan
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 lg:w-7/12">
          <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="w-full h-auto object-contain sm:h-72 sm:w-auto sm:object-scale-down sm:mb-4 md:h-80 md:object-cover md:mb-0 lg:h-96 lg:object-cover xl:h-112 2xl:h-128 float-right" />
        </div>
      </div>
    </section>

        </>
    )
}

export default Hero
