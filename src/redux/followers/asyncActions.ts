import { createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../../api'
import { IFollowers } from '../../types'

export const fetchFollowersByUrl = createAsyncThunk(
  'repo/fethcFollowers',
  async (path: string) => {
    const { data } = await url.get<IFollowers[]>(path)
    return data
  }
)
