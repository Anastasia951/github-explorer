import React, { useEffect } from 'react'
import { IRepo } from '../../types'
import Repo from '../Repo/Repo'
import { IMainProps } from './Main.props'
import styles from './Main.module.scss'
import Loader from '../Loader/Loader'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../redux/store'
import { fetchReposByURL } from '../../redux/repo/asyncActions'
import { useSelector } from 'react-redux'
import { selectRepos } from '../../redux/repo/selector'
import { Outlet, Route, Routes } from 'react-router-dom'

const Main = ({ user, className }: IMainProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const r = useSelector(selectRepos)
  useEffect(() => {
    dispatch(fetchReposByURL(user.repos_url)).catch(() => {
      toast('Something went wrong')
    })
  }, [])
  return (
    <div className={styles.repos + ' ' + className}>
      {/* {r.isLoading ? (
        new Array(5).fill('').map((_, key) => <Loader key={key} />)
      ) : r.repos.length === 0 ? (
        <>No Repositories yet</>
      ) : (
        r.repos.map((repo: IRepo) => <Repo key={repo.id} repo={repo} />)
      )} */}
      <Outlet />
    </div>
  )
}

export default Main
