import { Link } from "react-router-dom"
import './Home.css'
import way from './assets/wayfind.jpeg'

export default function Home() {
  return (
    <div className="banner">
  <div className="navbar">
    <img src={way} alt="Logo" className="logo" />{" "}
    {/* Adjust the path to your logo */}
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>{" "}
      {/* Change href to point to login.html */}
      <li>
        <Link to='/register'>Register</Link>
      </li>
      {/* Change href to point to register.html */}
    </ul>
  </div>
  <div className="content">
    <p>Travel Made Easy</p>
    <h1>Unlock the Possibilities OF Travel With EDU DRIVE</h1>
    <p>
      "Embark on unforgettable adventures with our travel platform. Discover new
      destinations, book hassle-free trips, and create memories that last a
      lifetime. Your journey starts here."
    </p>
    <div>
      <button type="button">
        <span />
        UNLOCK
      </button>
    </div>
  </div>
</div>

  )
}
