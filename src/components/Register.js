import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [id, idchange] = useState('')
  const [name, namechange] = useState('')
  const [password, passwordchange] = useState('')
  const [email, emailchange] = useState('')
  const [phone, phonechange] = useState('')
  const [country, countrychange] = useState('')
  const [address, addresschange] = useState('')
  const [gender, genderchange] = useState('male')

  const isValid=()=>{
    let isproceed=true;
    let errormessage;
    if(id===null || id===''){
      isproceed=false
      errormessage += ' Username'
    }
    if(name===null || name===''){
      isproceed=false
      errormessage += ' Fullname'
    }
    if(email===null || email===''){
      isproceed=false
      errormessage += ' Email'
    }
    if(password===null || password===''){
      isproceed=false
      errormessage += ' Password'
    }
    if(country===null || country===''){
      isproceed=false
      errormessage += ' Country'
    }
    if(!isproceed){
      toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email)){

        }else{
          isproceed=false;
          toast.warning('Please enter a valid email')
        }
    }
    return isproceed;
  }

const navigate=useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    if(isValid()){
      let regobj={id, name, password, email, phone, country, address, gender};
      //console.log(regobj)

      fetch(" http://localhost:8000/user", {
        method:"POST",
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(regobj)
      }).then((res)=>{
        toast.success('Registertion Sucessful')
        navigate('/login');
      }).catch((err)=>{
        toast.success('Failed: '+err.message)

      });
    }
  }
  return (
    <div className='container'>
      <div className="offset-lg-3 col-lg-6 container">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">User Name <span className="err-msg">*</span> </label>
                    <input value={id} onChange={e=>idchange(e.target.value)} type="name" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Password <span className="err-msg">*</span> </label>
                    <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Full Name <span className="err-msg">*</span> </label>
                    <input value={name} onChange={e=>namechange(e.target.value)} type="name" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Email <span className="err-msg">*</span> </label>
                    <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Phone No</label>
                    <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Country <span className="err-msg">*</span> </label>
                    <select value={country} onChange={e=>countrychange(e.target.value)} className="form-control">
                      <option value="Nigeria">Nigeria</option>
                      <option value="USA">USA</option>
                      <option value="South Africa">South Africa</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea value={address} onChange={e=>addresschange(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <input checked={gender==='male'} onChange={e=>genderchange(e.target.value)} type='radio' value='male' name='gender'className="app-check" />
                    <label>Male</label>
                    <input checked={gender==='female'} onChange={e=>genderchange(e.target.value)} type='radio' value='female'  name='gender' className="app-check" />
                    <label>Female</label>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="card-footer">
              <button type='submit' className="btn btn-primary">Register</button> |
              <Link className='btn btn-danger'>Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
