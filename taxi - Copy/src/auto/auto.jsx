import './auto.css'
import auto from '../assets/auto.jpg'
import { Link } from 'react-router-dom'

export default function Auto() {
  return (
    <>
<div className='card'>
    <div><img src={auto}/></div>
    <div>
        <h1>Auto1</h1>
        <p>Auto no:1</p>
        <p>phno:1234567770</p>
        <Link to='/auto1'><button>BOOK</button></Link>
    </div>
</div>
<div className='card'>
    <div><img src={auto}/></div>
    <div>
        <h1>Auto2</h1>
        <p>Auto no:2</p>
        <p>phno:1234567770</p>
        <Link to='/auto2'><button>BOOK</button></Link>
    </div>
</div>
<div className='card'>
    <div><img src={auto}/></div>
    <div>
        <h1>Auto3</h1>
        <p>Auto no:3</p>
        <p>phno:1234567770</p>
        <Link to='/auto3'><button>BOOK</button></Link>
    </div>
</div>
</>
  )
}





//     <div className="container">
//     <h1>Auto Booking</h1>
//     <form action="#" method="post" id="bookingForm">
//       <div className="form-group">
//         <label htmlFor="firstname">First Name:</label>
//         <input
//           type="text"
//           id="firstname"
//           name="firstname"
//           placeholder="Enter your first name"
//           required=""
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="rollno">Roll Number:</label>
//         <input
//           type="text"
//           id="rollno"
//           name="rollno"
//           placeholder="Enter your roll number"
//           required=""
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="phonenumber">Phone Number:</label>
//         <input
//           type="text"
//           id="phonenumber"
//           name="phonenumber"
//           placeholder="Enter your phone number"
//           required=""
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="availableauto">Available Auto:</label>
//         <select
//           id="availableauto"
//           name="availableauto"
//         //   onchange="showAutoOwnerDetails()"
//           required=""
//         >
//           <option value="">-- Select available auto --</option>
//           <option value="auto1">Auto 1</option>
//           <option value="auto2">Auto 2</option>
//           <option value="auto3">Auto 3</option>
//         </select>
//       </div>
//       <div id="autoOwnerDetails" style={{ display: "none" }}>
//         <h3>Auto Owner Details:</h3>
//         <p id="ownerName" />
//         <p id="ownerContact" />
//         <p id="ownerAddress" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="members">Number of Members:</label>
//         <input
//           type="number"
//           id="members"
//           name="members"
//           placeholder="Enter number of members"
//           required=""
//         />
//       </div>
//       <input
//         type="button"
//         defaultValue="Book Tickets"
//         // onclick="showBookingDetails()"
//       />
//     </form>
//     <div id="bookingDetails" style={{ display: "none" }}>
//       <h2>Booking Details:</h2>
//       <p id="userName" />
//       <p id="userRollNo" />
//       <p id="userPhone" />
//       <p id="selectedAuto" />
//       <p id="numMembers" />
//       <p id="amount" />
//     </div>
//   </div>