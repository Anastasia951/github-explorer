import { createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../../api'
import { IRepo } from '../../types'

export const fetchReposByURL = createAsyncThunk(
  'repo/fethcRepos',
  async (path: string) => {
    const { data } = await url.get<IRepo[]>(path)
    return data
  }
)
