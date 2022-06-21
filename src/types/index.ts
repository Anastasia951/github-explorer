import { Location } from 'react-router-dom'

export interface IUser {
  avatar_url: string
  createdAt: string | Date
  login: string
  followers: number
  following: number
  repos_url: string
}
export interface ILocationUser extends Location {
  state: IUser
}
export interface IRepo {
  name: string
  id: number | string
  description?: string
  language: string
  repo: any
}
