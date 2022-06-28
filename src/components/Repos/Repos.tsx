import React from 'react'
import { IRepo } from '../../types'
import Repo from '../Repo/Repo'
import styles from './Repos.module.scss'
import Loader from '../Loader/Loader'
import { ReposProps } from './Repos.props'
import { IContext, UserContext } from '../../context/userContext'

const Repos = ({ className }: ReposProps): JSX.Element => {
  const { r } = UserContext() as IContext
  return (
    <div className={styles.repos}>
      {r.isLoading ? (
        new Array(5).fill('').map((_, key) => <Loader key={key} />)
      ) : r.repos.length === 0 ? (
        <>No Repositories yet</>
      ) : (
        r.repos.map((repo: IRepo) => <Repo key={repo.id} repo={repo} />)
      )}
    </div>
  )
}

export default Repos
