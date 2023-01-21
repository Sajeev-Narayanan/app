import React from 'react'
import { useSelector } from 'react-redux';

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import './App.css'
import Layout from './components/Layout';
import { userData2 } from './features/userAuthSlice';
import { userData } from './features/userGoogleAuthSlice';
import UserRequireAuth from './features/UserRequireAuth';
import userRequireAuth from './features/UserRequireAuth';
import Adminlanding from './pages/adminPages/Adminlanding';
import AdminLogin from './pages/adminPages/AdminLogin';
import EventManagers from './pages/adminPages/EventManagers';
import Requests from './pages/adminPages/Requests';
import UserManagement from './pages/adminPages/UserManagement';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/providerPages/EditProfile';
import Messages from './pages/providerPages/Messages';
import ProviderChat from './pages/providerPages/ProviderChat';
import ProviderLogin from './pages/providerPages/ProviderLogin';
import ProviderProfile from './pages/providerPages/ProviderProfile';
import ProviderSignup from './pages/providerPages/ProviderSignup';
import Providers from './pages/Providers';
import Signup from './pages/Signup';
import SingleProvider from './pages/SingleProvider';
import UserLandingPage from './pages/UserLandingPage'
import UserMessages from './pages/UserMessages';


function App() {
  
  const Guser = useSelector(userData)
  const user = useSelector(userData2)
  console.log(user+"################################");


  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="login"  element={Guser ? <Navigate to="/"/> : <Login />} />
        <Route path="signup" element={Guser? <Navigate to="/"/> :<Signup />} />
        <Route element = {<UserRequireAuth/>}>
        <Route index element={<UserLandingPage />} />
        <Route path="providers" element={<Providers />} />
        <Route path="provider" element={<SingleProvider />} />
        <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<UserMessages />} />
        </Route>
        </Route>
        
        
        <Route path="providerlogin" element={<ProviderLogin />} />
        <Route path="providersignup" element={<ProviderSignup />} />
        <Route path="providerprofile" element={<ProviderProfile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="providerchat" element={<ProviderChat />} />
        

        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="adminlanding" element={<Adminlanding />} />
        <Route path="usermanagement" element={<UserManagement />} />
        <Route path="requests" element={<Requests />} />
        <Route path="eventmanagers" element={<EventManagers/>} />

      </Routes>
      
  )
}

export default App


