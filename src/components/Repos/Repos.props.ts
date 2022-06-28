import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ReposProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Record<string, any> {}
