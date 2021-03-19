import '../../Styles/login.css'
import axios from 'axios'

import { useRef } from "react";
import { ENDPOINT } from '../../tokens';

interface Props {
  authState: (value: boolean) => void
}

export const Login: React.FC<Props> = ({ authState }) => {
  const username = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)


  const authenticate_user = () => {
    if (!username.current?.value) {
      username.current?.focus()
      return
    }
    else if (!password.current?.value) {
      password.current?.focus()
      return
    }

    const data = { username: username.current.value, password: password.current.value }

    axios({
      method: 'post',
      url: `${ENDPOINT}/api/user/login`,
      headers: {},
      data
    }).then(res => {
      console.log(res.data.token);
      authState(true)
      document.cookie = `dogfood=${res.data.token}`
    }).catch(err => {
      console.log(err);
      password.current!.value = ""
    })

    return
  }

  return (
    <div className="login__container">
      <div className="info_text">
        <h1>Hello!</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi assumenda porro vitae unde voluptatibus nemo saepe non magni necessitatibus?assumenda porro vitae unde voluptatibus nemo saepe non magni necessitatibus?</span>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter username" defaultValue="" value={username.current?.value} ref={username} />
        <input type="password" placeholder="Enter password" defaultValue="" value={password.current?.value} ref={password} />
        <button onClick={authenticate_user}>Login</button>
      </div>
    </div>
  );
}