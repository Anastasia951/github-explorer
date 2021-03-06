import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types'
import { fetchUserByLogin } from './asyncActions'

interface IState {
  user: IUser
  isError: boolean
  isLoading: boolean
}
const initialState: IState = {
  user: {},
  isError: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserByLogin.pending, state => {
      state.isLoading = true
      state.user = {}
    })
    builder.addCase(
      fetchUserByLogin.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.isLoading = false
        state.isError = false
        state.user = action.payload
      }
    )
    builder.addCase(fetchUserByLogin.rejected, state => {
      state.isLoading = false
      state.isError = true
      state.user = {}
    })
  },
})

export default userSlice.reducer
