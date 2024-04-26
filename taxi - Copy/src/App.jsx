import { Link, Route,Routes } from 'react-router-dom'

import './App.css'
import Register from './user/Register'
import Login from './user/Login'
import Auto from './auto/auto'
import Auto1 from './auto/Auto1'
import Auto2 from './auto/Auto2'
import Auto3 from './auto/Auto3'
import Main from './Main/Main'
import Home from './Home'
import Bus from './Bus/Bus'
import CollegeBus from './Bus/ColegeBus'

function App() {

  return (
    <>
    <Link to='/' ></Link>
    <Link to='/register'></Link>
    <Link to='/auto'></Link>
    <Link to='/Main'></Link>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/auto' element={<Auto/>}></Route>
        <Route path='/auto1' element={<Auto1/>}></Route>
        <Route path='/auto2' element={<Auto2/>}></Route>
        <Route path='/auto3' element={<Auto3/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/ob' element={<Bus/>}></Route>
        <Route path='/cb' element={<CollegeBus/>}></Route>
      </Routes>
    </>
  )
}

export default App
