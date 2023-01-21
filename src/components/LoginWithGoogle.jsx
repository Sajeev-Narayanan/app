import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData, userGoogleLoginChange } from '../features/userGoogleAuthSlice';


const LoginWithGoogle = () => {
    const [user, setUser] = useState("");
    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const handleCallBackResponse = (response) => { 
        // console.log("Encoded JWT ID Token" + response.credential);
        const userObject = jwtDecode(response.credential);
        
        setUser(userObject.email)
        

    }
        
    console.log(user)
    if (user != "" || user == null) {
    
        const disp = dispatch(userGoogleLoginChange({ user }))
        // console.log(disp);
        if (disp) {
            navigate('/')
        }
    }
        


    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "1046487536601-b55jhi0uh6edbfujs6pm5n68nmcu19r6.apps.googleusercontent.com",
            callback : handleCallBackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("loginDiv"),
            {theme:"outline",size:"large",width:310,text: "continue_with", shape: "pill",}
        )
    }, []);
  return (
    <div id='loginDiv' className='mt-8'>
          
    </div>
  )
}

export default LoginWithGoogle
