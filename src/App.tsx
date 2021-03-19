import { useEffect, useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Login } from './Components/Login/Login'
import { checkTokenValidity } from './tokens'



export const App: React.FC = () => {

  const [auth, setAuth] = useState<boolean>(false)


  useEffect(() => {
    setAuth(checkTokenValidity())
  }, [])


  return (
    <div className="main__container">
      {auth ? <Dashboard /> : <Login authState={setAuth} />}
    </div>
  );
}
