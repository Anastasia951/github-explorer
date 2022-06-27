import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IUser } from '../../types'

export interface FollowersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Record<string, any> {}
