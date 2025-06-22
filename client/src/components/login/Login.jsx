import React, { useState, useEffect } from 'react'
import './login.css'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [islogin , setislogin] = useState(true)
  const [First_name, setFirst_name] = useState('')
  const [Last_name, setLast_name] = useState('')
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [loginstatus, setloginstatus] = useState()
  const [signstatus, setsignstatus] = useState()
  const [showerror, setshowerror] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setImageFile(file)
  }
  const register = async () => {
  const newUser = await axios.post(`http://localhost:3000/user/registration`,{
      First_name,
      Last_name,
      email,
      username,
      password
  })
    setsignstatus(newUser.data)
  }
  const login = async () =>{
    const oldUser = await axios.post(`http://localhost:3000/user/login`,{
      username,
      password
    })
    setloginstatus(oldUser.data)
  }
  useEffect(() => {
    if (signstatus) {
      toast.success('Registration successful!');
      navigate('/');
    } else if (loginstatus === false) {
      toast.error('Please check your form')
    }
  }, [signstatus]);
  useEffect(() => {
    if (loginstatus) {
      toast.success('Login successful!');
      navigate('/');
    } else if (loginstatus === false) {
      toast.error('invalid credentials')
    }
  }, [loginstatus]);
  return (
    <div className="all">
    <div className='login_page'>
      {islogin? (
        <div className="login">
          <h1>Login</h1>
          <input type="text" placeholder='username' value={username} onChange={(e) => {setusername(e.target.value)}} />
          <input type="password" placeholder='password' value={password} onChange={(e) => {setpassword(e.target.value)}} />
          <div className="button_con">
            <input type="submit"  value='Login' onClick={login}/>
            <p onClick={() => {setislogin(false)}} style={{fontSize: "1.6rem"}}>Dont have an account?</p>
          </div>
        </div>
      ):(
        <div className="register">
          <h1>Register</h1>
          <input type="text" placeholder='First name' value={First_name} onChange={(e) => {setFirst_name(e.target.value)}} />
          <input type="text" placeholder='Last name' value={Last_name} onChange={(e) => {setLast_name(e.target.value)}} />
          <input type="email" placeholder='email' value={email} onChange={(e) => {setemail(e.target.value)}} />
          <input type="text" placeholder='username' value={username} onChange={(e) => {setusername(e.target.value)}} />
          <input type="password" placeholder='password' value={password} onChange={(e) => {setpassword(e.target.value)}} />
          <div className="button_con">
          <input type="submit" value='Register' name="" id="" onClick={register} />
          <p onClick={() => {setislogin(true)}}>Login</p>  
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Login
