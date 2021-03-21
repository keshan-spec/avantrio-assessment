import { type } from 'node:os';
import React from 'react';
import "../../Styles/user_panel_tabs.css";
import { UserObject } from '../../tokens';



interface Props {
  users: UserObject[]
}

// generates a random color
const getRandomColor = () => {
  return "#" + ((1 << 24) * Math.random() | 0).toString(16)
}

export const UsersPanel: React.FC<Props> = ({ users }) => {
  return (
    <div className="left">
      <div className="tabset">
        <input type="radio" name="tabset" id="tab1" defaultChecked={true} />
        <label htmlFor="tab1">Staff</label>
        <input type="radio" name="tabset" id="tab2" />
        <label htmlFor="tab2">Employee</label>

        <div className="tab-panels">
          <section className="tab-panel">
            <ul>
              {/* Loop over the users given from the props and render each user item */}
              {users.length > 0 ?
                users.map((user, idx) => {
                  return <li className="user_item" key={idx}>
                    <span className="name_icon" style={{ backgroundColor: getRandomColor() }}>{user.name[0]}</span>
                    {user.name}
                    <span className="ham_icon">
                      <img src="assets/Group 566_3@2x.png" alt="" />
                    </span>
                  </li>
                }) :
                <img className="no_results" src="assets/no-results.svg" alt="" /> // if there is no users 
              }
            </ul>
          </section>
          <section className="tab-panel">
            {/* Employee section is empty by default */}
            <img className="no_results" src="assets/no-results.svg" alt="" />
          </section>
        </div>

      </div>
    </div>
  );
}
