import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IUser } from '../../types'

export interface ISidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Record<string, any> {
  user: IUser
}
