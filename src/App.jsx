import React from 'react'
import { useSelector } from 'react-redux';

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import './App.css'
import Layout from './components/Layout';
import AdminRequireAuth from './features/AdminRequireAuth';
import { currentToken } from './features/authSlice';
import { managersData } from './features/managersAuthSlice';
import ManagersRequireAuth from './features/ManagersRequireAuth';
import { userData2 } from './features/userAuthSlice';
// import { userData } from './features/userGoogleAuthSlice';
import UserRequireAuth from './features/UserRequireAuth';
import userRequireAuth from './features/UserRequireAuth';
import Adminlanding from './pages/adminPages/Adminlanding';
import AdminLogin from './pages/adminPages/AdminLogin';
import EventManagers from './pages/adminPages/EventManagers';
import Requests from './pages/adminPages/Requests';
import UserManagement from './pages/adminPages/UserManagement';
import ChangePassword from './pages/ChangePassword';
import Chat from './pages/chat/Chat';
// import Chat from './pages/Chat';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/providerPages/EditProfile';
import ManagerChangePassword from './pages/providerPages/ManagerChangePassword';
import ManagersForgotPassword from './pages/providerPages/ManagersForgotPassword';
import ManagersLanding from './pages/providerPages/ManagersLanding';
import Messages from './pages/providerPages/Messages';
import ProviderChat from './pages/providerPages/ProviderChat';
import ProviderLogin from './pages/providerPages/ProviderLogin';
import ProviderProfile from './pages/providerPages/ProviderProfile';
import ProviderSignup from './pages/providerPages/ProviderSignup';
import Providers from './pages/Providers';
import Signup from './pages/Signup';
import SingleProvider from './pages/SingleProvider';
import SparklingStories from './pages/SparklingStories';
import UserLandingPage from './pages/UserLandingPage'
import UserMessages from './pages/UserMessages';



function App() {

  // const Guser = useSelector(userData)
  const user = useSelector(userData2)
  const admin = useSelector(currentToken)
  const manager = useSelector(managersData)



  return (

    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<SparklingStories />} />


        <Route path="login" element={user != "" ? <Navigate to="/userlanding" /> : <Login />} />
        <Route path="signup" element={user != "" ? <Navigate to="/userlanding" /> : <Signup />} />
        <Route path="forgotpassword" element={user != "" ? <Navigate to="/userlanding" /> : <Forgotpassword />} />
        <Route path="changePassword/:userId/:token" element={user != "" ? <Navigate to="/userlanding" /> : <ChangePassword />} />
        <Route element={<UserRequireAuth />}>
          <Route path='userlanding' element={<UserLandingPage />} />
          <Route path="providers/:service" element={<Providers />} />
          <Route path="provider/:id" element={<SingleProvider />} />
          {/* <Route path="chat" element={<Chat />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<UserMessages />} />
        </Route>
        <Route path="chat" element={<Chat />} />

        <Route path="providerlogin" element={manager != "" ? <Navigate to="/managersLanding" /> : <ProviderLogin />} />
        <Route path="providersignup" element={manager != "" ? <Navigate to="/managersLanding" /> : <ProviderSignup />} />
        <Route path="managersForgotPassword" element={manager != "" ? <Navigate to="/managersLanding" /> : <ManagersForgotPassword />} />
        <Route path="managerChangePassword/:userId/:token" element={manager != "" ? <Navigate to="/managersLanding" /> : <ManagerChangePassword />} />
        <Route element={<ManagersRequireAuth />}>
          <Route path='managersLanding' element={<ManagersLanding />} />
          <Route path="providerprofile" element={<ProviderProfile />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="providerchat" element={<ProviderChat />} />
        </Route>


        <Route path="adminlogin" element={admin != "" ? <Navigate to="/adminlanding" /> : <AdminLogin />} />
        <Route element={<AdminRequireAuth />}>
          <Route path="adminlanding" element={<Adminlanding />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="requests" element={<Requests />} />
          <Route path="eventmanagers" element={<EventManagers />} />
        </Route>

      </Route>
    </Routes>

  )
}

export default App


