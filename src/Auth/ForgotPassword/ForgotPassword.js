import useAuthService from '../../service/authService';
import './ForgotPassword.scss';
import { useState } from 'react';


const ForgotPassword = () => {

  const [email, setEmail] = useState();

  const { postForgotPassword } = useAuthService();
  
  const onForgotPassword = (e) => {
    e.preventDefault();

    const data =  {
      email
    };

    postForgotPassword(data)

  }

  return (
    <div className="forgot-password">
      <h1 className="title-forgot-password text">Forgot Password</h1>
      <p className="welcome text">Hi! Please enter your email to reset your password</p>
      <form className="forgot-password-form">
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
        <button
          className="reset-password"
          type="submit"
          onClick={onForgotPassword}
          >Reset Password</button>
      </form>
    </div>
  );
}
export default ForgotPassword;