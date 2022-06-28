import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IFollowers } from '../../types'

export interface IRepoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  follower: IFollowers
}
