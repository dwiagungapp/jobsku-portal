import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DetailJob = () => {

    const {Id} = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(Id !== undefined) {
         axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
            .then((res) => {
              setData(res.data)
            })
          }
  
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

      if (data === null){
        return <div className="justify-center flex flex-wrap mx-10 mb-10 py-8 gap-7"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-900"></div></div>
      }

       return (
        <>
        <div className='flex justify-center items-center mt-10'>
  <img src='https://loremflickr.com/1000/250' alt='Company' className='rounded-lg shadow-lg w-full sm:w-auto'/>
</div>

<div className="flex flex-col items-center my-10 px-4 sm:px-8 md:px-16">
  <div className="bg-white shadow-md rounded-lg max-w-4xl w-full">
    <div className="px-6 py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img alt="Company Foto" src={data?.company_image_url} className="rounded-full h-10 w-10 mr-2" />
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {data?.company_name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {data?.company_city}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {data?.created_at}
            </p>
          </div>
        </div>
        <button type="button" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">
          Lamar sekarang
        </button>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="py-4">
        <div className="mb-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
            Nama pekerjaan
          </h4>
          <p className="text-sm text-gray-500">
            {data?.title}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
            Deskripsi pekerjaan
          </h4>
          <p className="text-sm text-gray-500">
            {data?.job_description}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
            Kualifikasi pekerjaan
          </h4>
          <p className="text-sm text-gray-500">
            {data?.job_qualification}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
            Status pekerjaan
          </h4>
          <p className="text-sm text-gray-500">
            {data?.job_tenure}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
            Gaji
          </h4>
          <p className="text-sm text-gray-500">
            {formatRupiah(data?.salary_min + "")}/Bulan
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
       )
}

export default DetailJob
