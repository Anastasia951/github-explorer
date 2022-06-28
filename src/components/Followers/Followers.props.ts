import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IUser } from '../../types'

export interface FollowerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Record<string, any> {}
