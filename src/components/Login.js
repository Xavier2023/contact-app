import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.clear();
  }, [])

  const ProceedingLogin = (e) => {
    e.preventDefault();
    if(validate()){
      //implementation
      // console.log('procced');
      fetch('  http://localhost:8000/user/'+username).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        if(Object.keys(resp).length === 0){
          toast.error('Please Enter Valid username')
        } else {
          if(resp.password === password) {
            toast.success('Login Successful')
            sessionStorage.setItem('username', username)
            navigate('/')
          }else {
            toast.error('Password Incorrect')
          }
        }
      }).catch((err)=>{
        toast.error('Login Failed due to :'+err.message)
      })
    }
  }
  const validate = () => {
    let result=true
    if(username ==='' || username === null){
      result=false
      toast.warning('Please Enter Username');
    }
    if(password ==='' || password === null){
      result=false
      toast.warning('Please Enter Password');
    }
    return result;
  }

  return (
    <div className='row'>
      <div className="offset-lg-3 col-lg-6" style={{marginTop: '100px'}}>
          <form className="container" onSubmit={ProceedingLogin}>
            <div className="card">
              <div className="card-header">
                <h1>User Login</h1>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="">User Name <span className="err-msg">*</span> </label>
                  <input value={username} onChange={e=>setUsername(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password <span className="err-msg">*</span> </label>
                  <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
                </div>
              </div>
              <div className="card-footer">
                <button type='submit' className="btn btn-primary">Login</button> |
                <Link to={'/register'} className='btn btn-success'>New User</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login

