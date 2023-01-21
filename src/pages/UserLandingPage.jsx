import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userData } from '../features/userGoogleAuthSlice'





const UserLandingPage = () => {
  const navigate = useNavigate()
  const serviceClickHandler = () => {
    navigate('/providers')
    
  }




  return (
    <div>
      <Navbar />
     
      <Banner />
      <div id='services' className='w-full pt-20 md:pt-40'>
      <h1 className='uppercase font-Volkhov m-7 text-2xl md:text-4xl lg:text-5xl text-center'>services</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto'>
        <ServiceCard key="1" serviceClick={serviceClickHandler} url="../../public/serviceImages/bride-groom-getting-married_52683-32275.png" text="WEDDING PLANNERS"/>
        <ServiceCard key="2" url="../../public/serviceImages/business-conference-illustration-with-speaker-stage-audience-cartoon-characters-scientific-presentation-academic-symposium-professional-briefing_575670-644.png" text="PERSONAL EVENTS"/>
        <ServiceCard key="3" url="../../public/serviceImages/flat-design-people-business-training_23-2148903887.png" text="COMMERCIAL EVENTS"/>
        <ServiceCard key="4" url="../../public/serviceImages/cartoon-kids-birthday-party_23-2149000579.png" text="BIRTHDAY PARTY" />

        <ServiceCard key="5" url="../../public/serviceImages/famous-rock-band-playing-music-singing-stage_74855-5828.webp" text="LIVE MUSIC & ORCHESTRA "/>
        <ServiceCard key="6" url="../../public/serviceImages/istockphoto-1160689812-170667a.jpg" text="ENTERTAINMENT SHOWS"/>
        <ServiceCard key="7" url="../../public/serviceImages/makeup-1262282427-612x612.jpg" text="BRIDAL MAKEUP "/>
        <ServiceCard key="8" url="../../public/serviceImages/topvector201100208.webp" text="PHOTOGRAPHY" />

        <ServiceCard key="9" url="../../public/serviceImages/travels.jpg" text="TRAVELS"/>
        <ServiceCard key="10" url="../../public/serviceImages/catering-1318687011-612x612.jpg" text="CATERING SERVICES"/>
        <ServiceCard key="11" url="../../public/serviceImages/banquet-hall-ballroom.webp" text="DECORATION"/>
        <ServiceCard key="12" url="../../public/serviceImages/police-man.jpg" text="SECURITY"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserLandingPage
