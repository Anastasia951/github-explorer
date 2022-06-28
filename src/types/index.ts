export interface IUser {
  avatar_url?: string
  createdAt?: string | Date
  login?: string
  followers?: number
  following?: number
  repos_url?: string
  followers_url?: string
}
export interface IRepo {
  name: string
  id: number | string
  description?: string
  language: string
  repo: any
}
export interface IFollowers {
  login: string
  id: number | string
  url: string
  avatar_url: string
}
