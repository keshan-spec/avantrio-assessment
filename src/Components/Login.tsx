import axios from 'axios'
import { useRef, useState } from "react";

import '../Styles/login.css';
import { ENDPOINT } from '../tokens';

interface Props {
  authState: (value: boolean) => void // state function for setting the auth status
}

export const Login: React.FC<Props> = ({ authState }) => {
  // react hooks for mapping dom elements to hook
  const username = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)

  // react state hook for errors and loading (waiting for the api)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ error: boolean, message: string }>({ error: false, message: "" });


  // validates user input and sends request to endpoint
  const authenticate_user = () => {
    if (!username.current?.value) {
      username.current?.focus()
      setError({ error: true, message: "Username is required!" })
      return
    }
    else if (!password.current?.value) {
      password.current?.focus()
      setError({ error: true, message: "Password is required!" })
      return
    }

    setLoading(true)

    const data = { username: username.current.value, password: password.current.value }

    axios({
      method: 'post',
      url: `${ENDPOINT}/api/user/login`,
      headers: {},
      data
    }).then(res => {
      // response received
      authState(true)
      document.cookie = `dogfood=${res.data.token}`
    }).catch(err => {
      // error connecting or wrong credentials
      console.log(err);
      password.current!.value = "" // reset password to blank
      setLoading(false)
      setError({ error: true, message: "Incorrect username or password!" }) // set error
    })

    return
  }



  return (
    <div className="login__container">
      <div className="info_text">
        <h1>Hello!</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi assumenda porro vitae unde voluptatibus nemo saepe non magni necessitatibus?assumenda porro vitae unde voluptatibus nemo saepe non magni necessitatibus?</span>
        <button>Get started!</button>
      </div>
      <div className="form">
        <span className={error.error ? "error" : "hidden"}>{error.message}</span>
        <input type="text" placeholder="Enter username" ref={username} />
        <input type="password" placeholder="Enter password" ref={password} />
        <button onClick={authenticate_user} disabled={loading}>
          {loading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
        </button>
      </div>
    </div>
  );
}