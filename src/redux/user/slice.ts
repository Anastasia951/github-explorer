import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'
import { fetchUserByLogin } from './asyncActions'

interface IState {
  user: IUser | undefined
  isError: boolean
  isLoading: boolean
}
const initialState: IState = {
  user: undefined,
  isError: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserByLogin.pending, (state, action) => {
      state.isLoading = true
      state.user = undefined
    })
    builder.addCase(fetchUserByLogin.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.user = action.payload
    })
    builder.addCase(fetchUserByLogin.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.user = undefined
    })
  },
})

export default userSlice.reducer
