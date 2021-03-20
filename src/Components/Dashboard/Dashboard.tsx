import { SideNav } from "./Nav/SideNav"
import '../../Styles/dashboard.css'
import { UsersPanel } from './UsersPanel'
import { HistoryPanel } from "./HistoryPanel"
import { Map } from "./Map"
import axios from 'axios';
import { useEffect, useState } from "react"
import { getAccessToken, UserObject, ENDPOINT } from "../../tokens"

interface Props { }

export const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Monitor</h1>
        </div>
        <div className="right">
          <span className="message">Message</span>
          <img src="assets/Group 323@2x.png" className="icon" alt="" />
        </div>
      </div>
      <hr />
    </>
  )
}

export const Dashboard: React.FC<Props> = () => {
  let [users, setUsers] = useState<UserObject[]>([])

  const getUsers = (token: string) => {
    axios({
      method: 'get',
      url: `${ENDPOINT}/api/users`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setUsers(res.data);
    }).catch(err => {
      console.log(err);
    })
  }


  useEffect(() => {
    const token = getAccessToken()
    if (token.length < 0) {
      return
    }

    getUsers(token)

  }, [])

  return (
    <>
      <SideNav />
      <main>
        <Header />
        <div className="dashboard__body">
          {users.length > 0 &&
            <>
              <UsersPanel users={users} />
              <div className="logs_section">
                <Map />
                <HistoryPanel user_id={users[2].id} />
              </div>
            </>
          }
        </div>
      </main>
    </>
  );
}
