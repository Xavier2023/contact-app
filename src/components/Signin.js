import React from 'react';
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from "../context/AuthProvider"
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Signin = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  },[])

  useEffect(() => {
    setErrMsg('')
  },[user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('')
    setSuccess(true);
  }

  return (
    <>
      {success ? (
          <section>
              <h1>You are logged in!</h1>
              <br />
              <p>
                <Link href="/">Go to Home</Link>
              </p>
          </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required 
            />
            <button>Sign In</button>
          </form>
          <p>
              Need an Account?<br />
              <span className="line">
                {/*put router link here*/}
                <Link href="/register2">Sign Up</Link>
              </span>
          </p>
        </section>
      )}
    </> 
  )
}

export default Signin
