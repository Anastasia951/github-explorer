import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IUser } from '../../types'

export interface ReposProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Record<string, any> {}
