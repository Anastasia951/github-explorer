import React from 'react'
import { IRepoProps } from './Follower.props'
import styles from './Follower.module.scss'
import cn from 'classnames'
const Follower = ({ follower, className }: IRepoProps) => {
  return <div className={cn(className, styles.repo)}>{follower.login}</div>
}

export default Follower
