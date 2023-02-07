import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/adminComponents/Sidebar'
import Banner2 from '../../components/Banner2'
import { currentToken } from '../../features/authSlice'

const AdminHome = () => {
  const token = useSelector(currentToken)
  return (
    <div className='flex'>
      <Sidebar />
      <div className=''>
        <Banner2 type="admin" />
      </div>
    </div>
  )
}


export default AdminHome
