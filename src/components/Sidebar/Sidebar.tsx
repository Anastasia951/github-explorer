import React from 'react'
import { ISidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
const Sidebar = ({ user, ...props }: ISidebarProps): JSX.Element => {
  if (Object.keys(user).length) {
    return (
      <div className={props.className}>
        <div className={styles.image}>
          <img src={user.avatar_url} alt='' />
        </div>
        <h2 className={styles.login}>{user.login}</h2>
        <div className={styles.follow}>
          <div className='followers'>
            <b>{user.followers}</b> followers
          </div>
          <div className='following'>
            <b>{user.following}</b> following
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
