import React from 'react'
import './Main.css'
import a from '../assets/auto.jpg'
import b from '../assets/bus.jpg'
import c from '../assets/collegebus.jpg'
import { Link } from 'react-router-dom'
export default function Main() {
  return (
    <div className="main-container">
  <h1>EduDrive</h1>
  <div className="vehicle-card" id="bus">
    <div><img className="vehicle-image" src={b} alt="Bus" /><Link to='/ob'><button type='submit'>Bus</button></Link></div>
    "This is used to determine bus schedules!"
  </div>
  <div className="vehicle-card" id="college-bus">
   <div><img className="vehicle-image" src={c} alt="College Bus" /><Link to='/cb'><button type='submit'>College Bus</button></Link></div> 
    "this helps to book the college bus tickets online!"
  </div>
  <div className="vehicle-card" id="trike">
    <div><img className="vehicle-image" src={a} alt="Trike" /><Link to='/auto'><button type='submit'>Trike</button></Link></div>
    " helps to connect the auto drivers and passenger via website !"
  </div>
</div>
  )
}
