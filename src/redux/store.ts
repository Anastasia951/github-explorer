import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './user/slice'
import repos from './repo/slice'
import followers from './followers/slice'
export const store = configureStore({
  reducer: {
    user,
    repos,
    followers,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
