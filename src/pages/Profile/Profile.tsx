import React from 'react'
import { useLocation } from 'react-router-dom'
import { Main, Navigation, Sidebar } from '../../components'
import { ILocationUser } from '../../types'
import styles from './Profile.module.scss'
const Profile: React.FunctionComponent = (): JSX.Element => {
  const location = useLocation()
  const { state }: ILocationUser = useLocation()
  return (
    <div className={styles.wrapper}>
      <Navigation className={styles.nav} />
      <Sidebar user={state} className={styles.sidebar} />
      <Main user={state} className={styles.main} />
    </div>
  )
}

export default Profile
