import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from './Hero'
import Fitur from './Fitur'
import { Link } from "react-router-dom"

const WorkListHome = () => {

        const [data, setData] = useState(null)
      
        useEffect(() => {
          axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data])
            })
            .catch((error) => {
            })
        }, [])

        /* Fungsi formatRupiah */
		function formatRupiah(angka, prefix){
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				let separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}

    const handleText = (text, max) => {
      if(text === null){
        return ""
      } else if (text.length > 10) {
        return text.slice(0, max) + "..."
      } else {
        return text
      }
    }

        return (
            <>
            <Hero />
            <Fitur/>
            <section id="lowongankerja">
            <div className='m-10 mt-20'>
            <p className='text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-center'>Temukan <span className="text-blue-900">Lowongan</span> Tersedia</p></div>
            <div className="flex justify-center flex-wrap mx-10 mb-10 py-8 gap-7 px-15">
            
                    { data !== null && data
                    .filter((res, index) => {
                        return index < 3
                    })
                    .map((res) => {
              
              return (
                <>   
                <Link to={`/lowongan/${res.id}`} key={res?.id} className="flex flex-col rounded-xl w-full lg:max-w-xs p-6 bg-white overflow-hidden border-solid border-l-2 border-r-2 border-t-2 border-b-2 border-blue-900">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center justify-start w-full flex-grow">
      
        <img alt="profil" src={res.company_image_url} className="mx-auto object-cover rounded-full h-10 w-10 " />
     
      <div className="flex flex-col items-start ml-4">
        <span className="text-gray-900 font-bold">
          {res.company_name}
        </span>
        <span className="text-gray-500 font-light text-sm">
          {res.company_city}
        </span>
        <span className="text-gray-500 font-light text-sm">
          {res.created_at}
        </span>
      </div>
    </div>
  </div>
  <div className="border-2 border-blue-900 mt-5"></div>
  <br/><p className="text-gray-900 font-bold">
    {res.title}
  </p>
  <p className="text-gray-500 font-normal text-sm grow">
    {handleText(res.job_description, 150) }
  </p>
  <div className="flex items-center rounded justify-between p-2 bg-blue-900 my-6 text-white">
    <div className="flex items-start w-full justify-between">
      <p className="flex-grow w-full text-2xl">
        <span className="font-light text-md">
          Rp
        </span>
        {formatRupiah(res?.salary_min + "") }
        <span className="text-sm font-light">
          /Month
        </span>
      </p>
    </div>
  </div>
</Link>
                
                </>
              )
            })}
                    
                    {
                        data === null && <div className="flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-900" role="status">
                        </div>
                      </div>
                      
                      
                    }

                    

</div>
<div className='flex justify-center items-center px-10 pb-10'><button className="px-8 py-3 text-lg font-semibold rounded bg-blue-900 text-white focus:ring-2"><Link to="/lowongan">Lihat lebih banyak lowongan</Link></button>
</div></section>
            </>
            
              )
}

export default WorkListHome