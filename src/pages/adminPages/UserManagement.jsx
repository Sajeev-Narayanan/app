import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import UserManagementTable from '../../components/adminComponents/UserManagementTable'
import axios from '../../config/axios'


const UserManagement = () => {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    try {
    
      axios.get("/admin/userData").then((response) => {
        
        if (response.status === 200) {
         
          setdata(response.data.data)
          console.log(data)
        } else {
          alert("SOMETHING WEONG!!!!!!!!!!!!!")
        }
      })
    } catch (error) {
      console.log(error);
      alert("SOMETHING WEONG!!!!!!!!!!!!!")
    }
    
  }, []);



  return (
    <div className='flex'>
          <Sidebar type="user" />
          <div className='w-full h-screen'>
        <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
          { data &&  <UserManagementTable data={data} />}
         
                 
              </div>
          </div>
    </div>
  )
}

export default UserManagement
