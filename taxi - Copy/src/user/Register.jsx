// export default Register;
import { useState } from 'react';
import axios from 'axios';
import owl from '../assets/owl.jpg';
import { Link } from 'react-router-dom';
function Register() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the backend
      const response = await axios.post('/register', formData);
      console.log(response.data);
      // Clear the form after successful registration
      setFormData({
        userName: '',
        email: '',
        password: ''
      });
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="container">
       <div className="login-box">
       <h1>EduDrive</h1>
      <img src={owl} className="img" alt="Owl" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{width:'313px',height:'30px',backgroundColor:'black',color:'white'}}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Link to='/Main'><button type="submit">Register</button></Link>
      </form>
    </div>
    </div>
  );
}

export default Register;