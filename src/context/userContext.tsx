import { ContextType } from 'react'
import { useOutletContext } from 'react-router-dom'
import { IFollowersState } from '../redux/followers/slice'
import { IReposState } from '../redux/repo/slice'

export interface IContext extends Record<any, any> {
  r: IReposState
  f: IFollowersState
}

export function UserContext() {
  return useOutletContext<ContextType<any>>()
}
