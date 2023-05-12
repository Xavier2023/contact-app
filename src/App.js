import React, { Component } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import Register from './components/Register';
import Register2 from './components/Register2';
import { ToastContainer } from 'react-toastify';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <ToastContainer />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/register2' element={<Register2 />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
