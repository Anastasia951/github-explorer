import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFollowers } from '../../types'
import { fetchFollowersByUrl } from './asyncActions'

export interface IFollowersState {
  followers: any[]
  isError: boolean
  isLoading: boolean
}
const initialState: IFollowersState = {
  followers: [],
  isError: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFollowersByUrl.pending, state => {
      state.isLoading = true
      state.followers = []
    })
    builder.addCase(
      fetchFollowersByUrl.fulfilled,
      (state, action: PayloadAction<IFollowers[]>) => {
        state.isLoading = false
        state.isError = false
        state.followers = action.payload
      }
    )
    builder.addCase(fetchFollowersByUrl.rejected, state => {
      state.isLoading = false
      state.isError = true
      state.followers = []
    })
  },
})

export default userSlice.reducer
