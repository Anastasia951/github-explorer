import { IUser } from '../../types'
import { RootState } from '../store'

export const selectUser = (state: RootState) => state.user
