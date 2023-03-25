import React from "react";

function Fitur () {
    return (
        <>
    <section id="fitur" className="py-20 bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="flex items-center">
        <div className="rounded-full bg-white border-2 border-gray-300 p-3 mr-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Cari pekerjaan sesuai minat</h3>
          <p className="text-gray-600">Temukan pekerjaan impianmu sesuai dengan minat dan passion yang kamu miliki.</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-white border-2 border-gray-300 p-3 mr-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Kirim lamaran dengan mudah</h3>
          <p className="text-gray-600">Kirim lamaranmu dengan mudah hanya dengan beberapa klik saja. Tanpa perlu mengisi formulir berulang kali.</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-white border-2 border-gray-300 p-3 mr-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l-3 3m0 0l-3-3m3 3V4"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Notifikasi pekerjaan baru</h3>
          <p className="text-gray-600">Dapatkan notifikasi langsung ke email atau handphone-mu ketika ada lowongan pekerjaan baru yang sesuai dengan minatmu.</p>
        </div>
      </div>
    </div>
  </div>
</section>






        </>
    )
}

export default Fitur