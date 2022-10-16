import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading:false,
  error:false
}

export const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginStart: (state) => {
        state.loding = true
      },
      loginSuccess: (state , action) => {
        state.loding = false
        state.currentUser = action.payload
      },
      loginFailure: (state) => {
        state.loding = false
        state.error = true
      },
      logout: (state) =>{
        state.currentUser = null
        state.loading = false
        state.error = false
      }
    },
  })

  export const {loginStart, loginSuccess,loginFailure,logout} = videoSlice.actions

  export default videoSlice.reducer ;