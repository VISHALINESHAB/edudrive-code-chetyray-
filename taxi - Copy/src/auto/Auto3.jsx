import './sub.css'
import auto from '../assets/auto.jpg'
import { Link } from 'react-router-dom'

export default function Auto3() {
  return (
    <>
    <div className='paycard'>
        <div style={{color:'black'}}>
         <img src={auto}/>
         <h1>Auto1</h1>
         <p>Auto no:1</p>
         <p>phno:1234567770</p>
         </div>
         <div>
            <h3>MyName</h3>
            <h4>Rollno</h4>
            <p>myPhone no</p>
            <Link to='https://pay.google.com/about/'><button>Payment</button></Link>
         </div>
    </div>
    </>
  )
}
