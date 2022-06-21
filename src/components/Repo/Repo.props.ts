import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IRepo } from '../../types'

export interface IRepoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  repo: IRepo
}
