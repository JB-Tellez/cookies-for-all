import Head from 'next/head'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div>

      {user ? <>
        <p>User: {user && user.username}</p>
        <button onClick={logout}>Log Out</button>
      </> : <button onClick={() => login("admin", "admin")} >Log In</button>}

    </div>
  )
}
