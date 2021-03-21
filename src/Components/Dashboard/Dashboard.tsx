import { SideNav } from "./Nav/SideNav"
import '../../Styles/dashboard.css'
import { UsersPanel } from './UsersPanel'
import { HistoryPanel } from "./HistoryPanel"
import { Map } from "./Map"
import axios from 'axios';
import { useEffect, useState } from "react"
import { getAccessToken, UserObject, ENDPOINT } from "../../tokens"

// function component for Header section of the dashboard
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

export const Dashboard: React.FC = () => {
  // react state hook for storing the users returned from API
  // uses custom interface type: UserObject
  let [users, setUsers] = useState<UserObject[]>([])

  // gets users from API and stores them in state
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
    const token = getAccessToken() // get token from cookie

    // if token is null/empty return
    if (token.length < 0) return

    // get users from API
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
                {/* user_id prop is set statically for now. reason explained in readme file */}
                <HistoryPanel user_id={users[2].id} />
              </div>
            </>
          }
        </div>
      </main>
    </>
  );
}
