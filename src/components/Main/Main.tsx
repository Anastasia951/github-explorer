import React, { useEffect } from 'react'
import { IMainProps } from './Main.props'
import styles from './Main.module.scss'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../redux/store'
import { fetchReposByURL } from '../../redux/repo/asyncActions'
import { useSelector } from 'react-redux'
import { selectRepos } from '../../redux/repo/selector'
import { Outlet } from 'react-router-dom'
import { fetchFollowersByUrl } from '../../redux/followers/asyncActions'
import { selectFollowers } from '../../redux/followers/selector'

const Main = ({ user, className }: IMainProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const r = useSelector(selectRepos)
  const f = useSelector(selectFollowers)
  useEffect(() => {
    dispatch(fetchReposByURL(user.repos_url)).catch(() => {
      toast('Something went wrong')
    })
  }, [])
  useEffect(() => {
    dispatch(fetchFollowersByUrl(user.followers_url)).catch(() => {
      toast('Something went wrong')
    })
  }, [])
  return (
    <div className={styles.repos + ' ' + className}>
      <Outlet context={{ r, f }} />
    </div>
  )
}

export default Main
