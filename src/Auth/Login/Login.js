import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import { fetchLogin } from "./loginSlice";
import Loading from "../../Loading/Loading";

import './Login.scss';




const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { status } = useSelector(state => state.login);
  
  console.log('Login status:', status);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    
    if (email || password) {
      const data = {
        email,
        password
      }

    dispatch(fetchLogin(data))
      .then(res => {console.log(res.payload);
      
        if (res.payload.status === 'success') {
        
          localStorage.setItem('accessToken', res.payload.data.access_token);
          localStorage.setItem('refreshToken', res.payload.data.refresh_token);
          navigate('/Unit');
        }
        
      }).catch((err) => {
        
      });    
    }

  }
  
  return (
    <div>
      <h1 className="title-sing-in text">Sing in</h1>
      <p className="welcome text">Hi! Welcome back, you've been missed</p>
      <form className="login-form">
        <div className="form-group-email">
          <label className="title" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="form-group-password">
          <label className="title" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <img src="./icon/profile/hidden.png" className="hidden icon" alt="password icon" />
          <img src="./icon/profile/show.png" className="show icon" alt="password icon" />
        </div>
        <Link className="forgot-password" to="ForgotPassword">Forgot Password</Link>
        {status  === 'loading' ? <Loading /> : <button
          className="sing-in"
          type="submit"
          disabled={status === 'loading' ? true : false}
          style={{ border: status === 'error' ? '3px solid red' : '#466730' }}
          onClick={onLogin}
          >Sing in</button>}
      </form>
      <p className="sing-up text">Don't have an account? <Link to="/Registration">Sign Up</Link></p>
    </div>
  );
}
export default Login;