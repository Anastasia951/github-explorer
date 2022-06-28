import React from 'react'
import cn from 'classnames'
import { INavigationProps } from './Navigation.props'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'
const Navigation = ({ className, ...props }: INavigationProps) => {
  return (
    <div {...props} className={cn(className, styles.nav)}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} to={`repos`}>
            Repositories
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to={`followers`}>
            Followers
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to={'/'}>
            Back
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
