import React, { useRef, useState } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as Logo } from './logo.svg'
import styles from './Form.module.scss'
import { useNavigate } from 'react-router-dom'
import { fetchUserByLogin } from '../../redux/user/asyncActions'
import { useAppDispatch } from '../../redux/store'

const Form: React.FunctionComponent = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState<string | undefined>('')
  const navigate = useNavigate()
  const findUser = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault()
    if (username?.trim()) {
      let userLogin = username.trim()
      //   .catch(err => toast(`User ${userLogin} doesn't exist`))
      dispatch(fetchUserByLogin(userLogin))
      navigate(`profile/${userLogin}`)
    }
  }
  const setValue = (): void => {
    setUsername(inputRef.current?.value)
  }
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        transition={Slide}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className={styles.find}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.title}>GitHub Explorer</h1>
        <form action='form__form' className={styles.form}>
          <label htmlFor='username' className={styles.username}>
            Username
          </label>
          <input
            value={username}
            onChange={setValue}
            ref={inputRef}
            type='text'
            id='username'
            className={styles.findInput}
          />
          <input
            type='submit'
            onClick={findUser}
            value={'Search'}
            className={styles.searchBtn}
          />
        </form>
      </div>
    </>
  )
}

export default Form
