import React, { useEffect, useState } from 'react'
import { url } from '../../api'
import { IRepo } from '../../types'
import Repo from '../Repo/Repo'
import { IMainProps } from './Main.props'
import styles from './Main.module.scss'
import Loader from '../Loader/Loader'
import { toast } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
const Main = ({ user, className }: IMainProps): JSX.Element => {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    url
      .get(`${user.repos_url}`)
      .then(res => {
        setRepos(res.data)
      })
      .catch(err => {
        toast('Error. Try again later')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return (
    <div className={styles.repos + ' ' + className}>
      {isLoading ? (
        new Array(5).fill('').map((_, key) => <Loader key={key} />)
      ) : repos.length === 0 ? (
        <>No Repositories yet</>
      ) : (
        repos.map((repo: IRepo) => <Repo key={repo.id} repo={repo} />)
      )}
    </div>
  )
}

export default Main
