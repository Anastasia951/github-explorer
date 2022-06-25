import React from 'react'
import { useSelector } from 'react-redux'
import { Main, Navigation, Sidebar } from '../../components'
import { selectUser } from '../../redux/user/selector'
import styles from './Profile.module.scss'
const Profile: React.FunctionComponent = (): JSX.Element => {
  const u = useSelector(selectUser)
  return (
    <div className={styles.wrapper}>
      <Navigation className={styles.nav} />
      <Sidebar user={u.user} className={styles.sidebar} />
      <Main user={u.user} className={styles.main} />
    </div>
  )
}

export default Profile
