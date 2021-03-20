import { useEffect, useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Login } from './Components/Login'
import { checkTokenValidity } from './tokens'



export const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false)

  useEffect(() => {
    setAuth(checkTokenValidity())
  }, [])


  const style: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    position: "relative"
  }
  return (
    <>
      {auth ? <Dashboard /> : <Login authState={setAuth} />}
    </>
  );
}
