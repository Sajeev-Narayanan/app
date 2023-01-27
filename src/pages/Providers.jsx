import { useToast } from '@chakra-ui/toast'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navebar from '../components/Navbar'
import ProvidersCard from '../components/ProvidersCard'
import axios from '../config/axios'

const Providers = () => {
  const navigate = useNavigate()
  const { service } = useParams();
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const toast = useToast()

  const [currLocationJs, setCurrLocationJs] = useState({});

  // AIzaSyBjU00eddD4yRAfeFli6KD2L7sRDaDVlno

  useEffect(() => {
    
    getLocationJs();

   axios.get(`/findManagers?service=${service}`).then((response) => { 
     if (response.status === 201) {
       if (response.data.length == 0) {
        navigate("/userlanding")
        toast({
         position: "top",
         variant: 'left-accent',
         status: 'info',
         isClosable: true,
         title: 'No companies are available',
     
       })
       }else{setData(response.data)}
       
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
  }, []);

  
  
  const getLocationJs = async() => {
   await navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
     setCurrLocationJs({ latitude, longitude });
     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key="AIzaSyBjU00eddD4yRAfeFli6KD2L7sRDaDVlno"`)
     .then(response => response.json())
     .then((data) => {
         console.log(latitude,"::::::::",longitude)
       console.log(data);
     })
    });
  };

  const moreHandler = (id) => {
     navigate(`/provider/${id}`)
  }
  return (
    <div className='w-full'>
          <Navebar />
      <div className='lg:max-w-[1600px] md:max-w-[900px] max-w-[400px] mx-auto'>
        <div className='flex justify-between items-center'>
        <h2 className='font-Volkhov text-4xl font-bold m-10 uppercase'>{ service}</h2>
          <select className='text-xl font-medium p-2 h-14 mr-10 border-2 border-black rounded-full bg-transparent' onChange={(e)=> setLocation(e.target.value)} value={location} name="location" id="">
          
                              <option value="Alappuzha" >Alappuzha</option>
                              <option value="Ernakulam">Ernakulam</option>
                              <option value="Idukki">Idukki</option>
                              <option value="Kannur">Kannur</option>
                              <option value="Kasaragod">Kasaragod</option>
                              <option value="Kollam">Kollam</option>
                              <option value="Kottayam">Kottayam</option>
                              <option value="Kozhikode">Kozhikode</option>
                              <option value="Malappuram">Malappuram</option>
                              <option value="Palakkad">Palakkad</option>
                              <option value="Pathanamthitta">Pathanamthitta</option>
                              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                              <option value="Thrissur">Thrissur</option>
                              <option value="Wayanad">Wayanad</option>
        </select>

        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
          {data &&
          (
            data.map((company,i) => {
              return <ProvidersCard key={i} data={company} moreClick={moreHandler} />
            })
          )
          }
          
               
              </div>
              
                     
          </div>
          <Footer/>
    </div>
  )
}

export default Providers
