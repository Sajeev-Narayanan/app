import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: "",
    
}

const userGoogleAuthSlice = createSlice({
    name: 'googleAuth',
    initialState,
    reducers: {
        userGoogleLoginChange: (state, action) => {
            state.user = action.payload.user
         
            
        }
    }
})

export default userGoogleAuthSlice.reducer
export const { userGoogleLoginChange } = userGoogleAuthSlice.actions
export const userData =(state) =>state.loginGoogle.user