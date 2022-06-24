import { createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../../api'
import { IUser } from '../../types'

export const fetchUserByLogin = createAsyncThunk(
  'user/fetchUser',
  async (login: string) => {
    const { data } = await url.get(`/users/${login}`)
    console.log('data', data)
    return data
  }
)
