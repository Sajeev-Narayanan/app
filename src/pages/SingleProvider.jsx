import React from 'react'
import Navebar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesCard from '../components/ServicesCard'
import GalaryCard from '../components/GalaryCard'
import { useNavigate } from 'react-router-dom'


const SingleProvider = () => {


const navigate = useNavigate()
const buttonhandle = () => {
  navigate('/chat')
 }
  return (
    <div>
          <Navebar />
          <div className='w-full h-[300px] lg:h-[500px] bg-slate-300 flex justify-center'>
              <div className='lg:w-[400px] h-[230px] w-[230px] lg:h-[400px] rounded-full bg-slate-300 border-8 border-[#E1EDF8] absolute top-[260px] lg:top-[395px]'></div>
      </div>
      <div className='w-full mt-72 flex flex-col items-center justify-center mx-auto max-w-[900px]'>
        <h2 className='lg:text-5xl text-3xl font-semibold font-Volkhov mb-16'>Company Name</h2>
        <p className='text-center text-lg'>An event management company is a business that specializes in organizing and executing events such as weddings, corporate events, concerts, festivals, and more. These companies typically handle all aspects of event planning, including budgeting, venue selection, logistics, marketing, and more. They work closely with clients to understand their needs and goals for the event, and then use their expertise and resources to bring the event to life. Some event management companies may also offer additional services such as event design, entertainment booking, catering, and event rentals. Overall, the goal of an event management company is to take the stress and hassle out of planning and executing a successful event.</p>
      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Services we provided</h3>
        <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10'>
          <ServicesCard text="wedding planning" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
        </div>
      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Galary</h3>
        <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10'>
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard/>
        </div>
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
      <Footer/>
    </div>
  )
}

export default SingleProvider
