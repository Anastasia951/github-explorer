import React from 'react'
import { IRepoProps } from './Follower.props'
import styles from './Follower.module.scss'
import cn from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { fetchUserByLogin } from '../../redux/user/asyncActions'
import { toast } from 'react-toastify'
const Follower = ({ follower, className }: IRepoProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  async function fetchAnotherUser() {
    dispatch(fetchUserByLogin(follower.login))
      .then(data => {
        if (data.payload) {
          navigate(`/${follower.login}/repos`)
        } else {
          throw new Error()
        }
      })
      .catch(() => {
        toast(`Something went wrong`)
      })
  }
  return (
    <div className={cn(className, styles.follower)}>
      <div className={styles.imageWrapper}>
        <img src={follower.avatar_url} alt='' />
      </div>
      <div className={styles.userInfo}>
        <Link onClick={fetchAnotherUser} to={`/${follower.login}/repos`}>
          <h3 className={styles.title}>{follower.login}</h3>
        </Link>
      </div>
    </div>
  )
}

export default Follower
