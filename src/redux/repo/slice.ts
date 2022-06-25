import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRepo } from '../../types'
import { fetchReposByURL } from './asyncActions'

interface IState {
  repos: IRepo[]
  isError: boolean
  isLoading: boolean
}
const initialState: IState = {
  repos: [],
  isError: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReposByURL.pending, state => {
      state.isLoading = true
      state.repos = []
    })
    builder.addCase(
      fetchReposByURL.fulfilled,
      (state, action: PayloadAction<IRepo[]>) => {
        state.isLoading = false
        state.isError = false
        state.repos = action.payload
      }
    )
    builder.addCase(fetchReposByURL.rejected, state => {
      state.isLoading = false
      state.isError = true
      state.repos = []
    })
  },
})

export default userSlice.reducer
