// import React, { useEffect } from 'react'
// import { IRepo } from '../../types'
// import Repo from '../Repo/Repo'
// import { ReposProps } from './Repos.props'
import styles from './Followers.module.scss'
import Loader from '../Loader/Loader'
// import { toast } from 'react-toastify'
// import { useAppDispatch } from '../../redux/store'
// import { fetchReposByURL } from '../../redux/repo/asyncActions'
// import { useSelector } from 'react-redux'
// import { selectRepos } from '../../redux/repo/selector'
// import { Outlet, Route, Routes } from 'react-router-dom'

import { IContext, UserContext } from '../../context/userContext'
import { FollowerProps } from './Followers.props'
import { IFollowers } from '../../types'
import Follower from '../Follower/Follower'

const Followers = ({ className }: FollowerProps): JSX.Element => {
  const { f } = UserContext() as IContext
  return (
    <div className={styles.repos + ' ' + className}>
      {f.isLoading ? (
        new Array(5).fill('').map((_, key) => <Loader key={key} />)
      ) : f.followers.length === 0 ? (
        <>This user doesn't have followers</>
      ) : (
        f.followers.map((follower: IFollowers) => (
          <Follower key={follower.id} follower={follower} />
        ))
      )}
    </div>
  )
}

export default Followers
