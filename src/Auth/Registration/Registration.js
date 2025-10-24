import { Link } from "react-router-dom";
import './Registration.scss';
import { useState } from "react";
import useProfileService from "../../service/authService";


const Registration = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { postRegistrations } = useProfileService();

  const onRegistration = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = {
        firstName,
        lastName,
        email,
        password
      }

      postRegistrations(data);

    }


  }

  
  return (
    <div className="registration">
      <h1 className="title-registration text">Create Account</h1>
      <p className="description text">Fill your information below or register with your social account</p>
        <form className="registration-form">
          <div className="form-group-first-name">
            <label className="title" htmlFor="FirstName">First Name</label>
            <input
              className="input"
              id="FirstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div className="form-group-last-name">
            <label className="title">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div className="form-group-email">
            <label className="title">Email</label>
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="form-group-password">
            <label className="title">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <img src="./icon/profile/hidden.png" className="hidden icon" alt="password icon" />
            <img src="./icon/profile/show.png" className="show icon" alt="password icon" />
          </div>
          <div className="form-group-confirm-password">
            <label className="title">Confirm Password</label>
              <input
                className="input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
              <img src="./icon/profile/hidden.png" className="hidden icon" alt="password icon" />
              <img src="./icon/profile/show.png" className="show icon" alt="password icon" />
          </div>
          <div className="form-group-terms">
            <label className="title">Agree with<Link to="/">Terms and Conditions</Link></label>
            <input type="checkbox" />
          </div>
            <button className="sing-up" type="submit" onClick={onRegistration}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Log in</Link></p>
    </div>
  );
}
export default Registration;