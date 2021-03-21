import { useEffect, useState } from 'react';

// components
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Login } from './Components/Login'
import { checkTokenValidity } from './tokens'


export const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false) // to check if user is authenticated

  useEffect(() => {
    // checkTokenValidity function returns a boolean after checking
    // if the token exists, if yes, has it expired. 
    setAuth(checkTokenValidity())
  }, [])

  return (
    <>
      {auth ? <Dashboard /> : <Login authState={setAuth} />}
    </>
  );
}



