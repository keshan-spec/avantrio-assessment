import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT, getAccessToken, UserLogsObject } from "../../tokens";

interface Props {
  user_id: number
}

export const HistoryPanel: React.FC<Props> = ({ user_id }) => {
  // react state hook for storing logs
  // uses custom data type : UserLogsObject
  const [logs, setLogs] = useState<UserLogsObject>()

  // get the user logs for the given user id prop
  const getUserlogs = (user_id: number) => {
    let token = getAccessToken()
    let url = `${ENDPOINT}/api/user/${user_id}/logs`

    axios.get(url, { headers: { authorization: `Bearer ${token}` } })
      .then(function (response) {
        setLogs(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getUserlogs(user_id)
  }, [user_id])

  return (
    <>
      {logs ?
        <>
          <div className="logs_container">
            <div className="table_header">
              <span className="name"> History <span className="inner_name">( {logs?.user} )</span></span>
              <div className="col_names">
                <span>All</span>
                <span>Location</span>
                <span>Message</span>
                <span>Alert</span>
                <span><img src="assets/Group 618.png" alt="" /></span>
              </div>
            </div>

            <div className="logs">
              <table className="logs__table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Alert View</th>
                    <th>Time</th>
                    <th>Location</th>
                  </tr>
                </thead>
                {/*Loop over logs state and render each log  */}
                <tbody>
                  {logs.logs && logs.logs.map(log => {
                    return <>
                      <tr className="data" key={log.id}>
                        <td>{log.date}</td>
                        <td>{log.alert_view ? "On" : "Off"}</td>
                        <td>{log.time}</td>
                        <td>Live Map</td>
                      </tr>
                    </>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
        : <h1>Loading</h1>
      }
    </>

  );
}
