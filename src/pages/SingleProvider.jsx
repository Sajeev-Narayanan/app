import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesCard from '../components/ServicesCard'
import GalaryCard from '../components/GalaryCard'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../config/axios'
import { useToast } from '@chakra-ui/toast'


const SingleProvider = () => {

  const [data, setData] = useState("");
  const navigate = useNavigate()
  const toast = useToast()
  const { id } = useParams();
  const buttonhandle = () => {
    navigate('/chat')
  }

  useEffect(() => {
    try {
      axios.get(`/managerProfile?id=${id}`).then((response) => {
        console.log(response.data)
        if (response.status === 201) {
          if (response.data) {
            setData(response.data)
          } else {
            navigate("/userlanding")
            toast({
              position: "top",
              variant: 'left-accent',
              status: 'info',
              isClosable: true,
              title: 'No companies are available',

            })
          }

        } else {
          navigate("/userlanding")
          toast({
            position: "top",
            variant: 'left-accent',
            status: 'info',
            isClosable: true,
            title: 'No companies are available',

          })
        }

      })
    } catch (error) {
      navigate("/userlanding")
      toast({
        position: "top",
        variant: 'left-accent',
        status: 'info',
        isClosable: true,
        title: 'No companies are available',

      })
    }


  }, []);

  return (
    <div>
      <Navebar />
      <div className='w-full h-[300px] lg:h-[500px] bg-slate-300 flex justify-center'>
        {data.coverPhoto && <div className='w-full h-full bg-cover bg-no-repeat' style={{ backgroundImage: `url(${data.coverPhoto})` }}></div>}
        <div className='lg:w-[400px] h-[230px] w-[230px] lg:h-[400px] rounded-full bg-slate-300 border-8 border-[#E1EDF8] absolute top-[260px] lg:top-[395px]'>
          {data.profilePhoto && <div className='w-full h-full bg-cover bg-no-repeat bg-center rounded-full' style={{ backgroundImage: `url(${data.profilePhoto})` }}></div>}
        </div>
      </div>
      <div className='w-full mt-72 flex flex-col items-center justify-center mx-auto max-w-[900px]'>
        <h2 className='lg:text-5xl text-3xl font-semibold font-Volkhov mb-16'>{data.companyname}</h2>
        <p className='text-center text-lg'>{data.description}</p>
      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Services we provided</h3>

        {/* <ServicesCard text="wedding planning" /> */}
        {data.category ?
          <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10 col-span-3'>

            {data.category.map((elements) => {
              return <ServicesCard text={elements} />
            })}
          </div>
          : <h1>Services not available</h1>}

      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Galary</h3>

        {data.gallery ?
          <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10 col-span-2'>
            {data.gallery.map((elements) => {
              return <GalaryCard image={elements} />
            })}


          </div>
          : <h1>Services not available</h1>}

      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16 flex flex-col items-center'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Connect Us</h3>
        <div>
          <h2 className='font-medium text-2xl text-center'>Address</h2>
          <p className='text-center'>company name</p>
          <p className='text-center'>house name</p>
          <p className='text-center'>place</p>
          <p className='text-center'>district</p>
          <p className='text-center'>state</p>
          <p className='text-center'>pincode</p>
          <p className='text-center'><a href="mailto:example@gmail.com">example@gmail.com</a></p>
          <p className='text-center'><a href="tel:1234567891">8547022049</a></p>

          <button onClick={buttonhandle} className='uppercase w-[160px] h-[60px] mt-10 mb-10 text-white text-xl font-semibold shadow-2xl hover:shadow-black hover:bg-green-800 duration-300 bg-green-700 rounded-full'>Chat with us</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default SingleProvider
