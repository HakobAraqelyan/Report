import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p className='p1'>Let's set up your business profile</p>
      <p>Create New Business Registration</p>

      <label htmlFor="businessName">Business Name:</label>
      <input
        type="text"
        id="businessName"
        placeholder="Enter your business name"
        required
        />
        <label htmlFor="businessAddress">Business Email:</label>
        <input
            type="address"
            id="businessAddress"
            placeholder="Enter your business address"
            required
        />
        <label htmlFor="businessPhone">Business Phone:</label>
        <input
            type="tel"
            id="businessPhone"
            placeholder="Enter your business phone number"
            required
        />
      <button className="explore-button">Explore Now</button>
    </div>
  );
}

export default Welcome;