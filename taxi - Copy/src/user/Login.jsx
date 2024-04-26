import { Link } from 'react-router-dom'
import owl from '../assets/owl.jpg'
import './Register.css'

export default function Login() {
  return (
   <>
   <div className="container">
  <div className="login-box">
    <h1>EduDrive</h1>
    <img src={owl} height="200px" className="img" />
    <div className="q">
      <input type="text" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
    </div>
    <Link to='/Main'><button type='submit'>Login</button></Link>
    <Link to='/register'>Register</Link>
    <p className="error-amessage" id="error-message" />
  </div>
</div>
    
   </>
  )
}
