import React, { useState } from 'react'
import Navebar from '../../components/providerComponents/Navbar'
import Footer from '../../components/Footer'
import ServicesCard from '../../components/ServicesCard'
import GalaryCard from '../../components/GalaryCard'
import { useNavigate } from 'react-router-dom'
import { MdLibraryAdd} from 'react-icons/md'
import AddServiceModal from '../../components/providerComponents/AddServiceModal'
import AddImage from '../../components/providerComponents/AddImage'


const ProviderProfile = () => {

  const [addService, setAddService] = useState(false)
  const [addImage,setAddImage] = useState(false)
const navigate = useNavigate()

  
  const addServiceClose = () => setAddService(false);
  const addImageClose = () => setAddImage(false);
  
  return (
    <div className=''>
          <Navebar />
      <div className='w-full h-[300px] lg:h-[500px] bg-slate-300 flex relative justify-center'>
        <div className='bg-white border-black border-2 absolute right-16 top-14 w-48 h-16 rounded-2xl flex items-center justify-center text-xl font-semibold hover:shadow-xl uppercase hover:bg-[#E1EDF8] hover:scale-105'>edit profile</div>
              <div className='lg:w-[400px] h-[230px] w-[230px] lg:h-[400px] rounded-full bg-slate-300 border-8 border-[#E1EDF8] absolute top-[187px] lg:top-[300px]'></div>
      </div>
      <div className='w-full mt-40 lg:mt-72 flex flex-col items-center justify-center mx-auto max-w-[900px]'>
        <h2 className='lg:text-5xl text-3xl font-semibold font-Volkhov mb-16'>Company Name</h2>
        <p className='text-center text-lg'>An event management company is a business that specializes in organizing and executing events such as weddings, corporate events, concerts, festivals, and more. These companies typically handle all aspects of event planning, including budgeting, venue selection, logistics, marketing, and more. They work closely with clients to understand their needs and goals for the event, and then use their expertise and resources to bring the event to life. Some event management companies may also offer additional services such as event design, entertainment booking, catering, and event rentals. Overall, the goal of an event management company is to take the stress and hassle out of planning and executing a successful event.</p>
      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Services we provided</h3>
        <div className='grid grid-flow-col grid-cols-4'>
        <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10 col-span-3'>
          <ServicesCard text="wedding planning" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
          <ServicesCard text="photography" />
        </div>
          <div className='col-span-1 flex items-center justify-center'>
            <div onClick={()=>setAddService(true)} className='lg:w-[300px] lg:h-[200px] md:w-[250px] md:h-[125px] w-[200px] h-[80px] bg-white rounded-2xl shadow-lg shadow-black flex items-center justify-center hover:shadow-md hover:shadow-slate-700 uppercase text-lg font-semibold text-center ml-2 hover:text-base cursor-pointer hover:scale-95'>add services</div>
          </div>
          </div>
      </div>
      <div className='mx-auto pl-2 pr-2 max-w-[400px] md:max-w-[900px] lg:max-w-[1500px] mt-16'>
        <h3 className='text-3xl font-semibold font-Volkhov mb-10'>Galary</h3>
        <div className='grid grid-flow-col grid-cols-3'>
          <div className='grid grid-flow-col gap-3 overflow-x-scroll show-scrollbar mb-10 col-span-2'>
            
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard />
          <GalaryCard/>
          </div>
          <div className='col-span-1 md:pl-10'>
            <div onClick={ ()=>setAddImage(true)} className='m-7 left-1 lg:w-[300px] lg:h-[360px] md:w-[250px] md:h-[270px] w-[160px] h-[250px] bg-white rounded-2xl shadow-lg shadow-black flex items-center justify-center hover:shadow-md hover:shadow-slate-700 uppercase text-9xl font-semibold text-center ml-2 hover:text-8xl cursor-pointer hover:scale-95'><MdLibraryAdd/></div>
          </div>
          </div>
      </div>
      <AddServiceModal onClose={addServiceClose} visible={addService} />
      <AddImage onClose={addImageClose} visible={addImage} />
      
      <Footer/>
    </div>
  )
}

export default ProviderProfile
