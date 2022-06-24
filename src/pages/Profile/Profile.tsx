import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Main, Navigation, Sidebar } from '../../components'
import { selectUser } from '../../redux/user/selector'
import { ILocationUser, IUser } from '../../types'
import styles from './Profile.module.scss'
const Profile: React.FunctionComponent = (): JSX.Element => {
  const u = useSelector(selectUser)
  console.log(u)
  return (
    <div className={styles.wrapper}>
      <Navigation className={styles.nav} />
      {u.isLoading ? (
        <>LOADING</>
      ) : (
        <>
          <Sidebar user={u.user} className={styles.sidebar} />
          <Main user={u.user} className={styles.main} />
        </>
      )}
    </div>
  )
}

export default Profile
