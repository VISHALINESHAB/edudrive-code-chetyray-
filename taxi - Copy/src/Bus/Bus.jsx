import React, { useState } from 'react';

const Bus = () => {

    const busInfo = {
        '6.10am': {
    busNo: '46',
    busRoute: 'kurmallipalayam-pollachi',
    busTiming: '6:00 AM'
},
'7.10am': {
    busNo: '33d',
    busRoute: 'jakkarpalayam-gandi',
    busTiming: '7:10 AM'
},
'7:50 am': {
    busNo: ' S2',
    busRoute: 'Tirupur to Kinathukadavu',
    busTiming: '7:50 AM'
},
'8:40am': {
    busNo: '4B',
    busRoute: 'Mettuvavi to Pollachi',
    busTiming: '8:40 AM'
},
'9:20am': {
    busNo: '19/28',
    busRoute: 'Vadasithur to Kinathukadavu',
    busTiming: '9:20 AM'
},
'9:50am': {
    busNo: 'Mofesil Bus',
    busRoute: 'Tirupur to Kinathukadavu',
    busTiming: '9:50 AM'
},
'11:50am': {
    busNo: '46',
    busRoute: 'Vadasithur to Pollachi',
    busTiming: '11:50 AM'
},
'12:00pm': {
    busNo: '33D',
    busRoute: 'Kattampatti to Kinathukadavu',
    busTiming: '12:00 PM'
},
'1:10pm': {
    busNo: 'S2',
    busRoute: 'Senjerimala to Kinathukadavu',
    busTiming: '1:10 PM'
},
'1:40pm': {
    busNo: '4B',
    busRoute: 'Mettuvavi to Pollachi',
    busTiming: '1:40 PM'
},
'2:45pm': {
    busNo: '33D',
    busRoute: 'Kattampatti to Gandhipuram',
    busTiming: '2:45 PM'
},
'3:00pm': {
    busNo: 'S2',
    busRoute: 'Sulthanpet to Kinathukadavu',
    busTiming: '3:00 PM'
},
'4:35pm': {
    busNo: '19/28',
    busRoute: 'Vadasithur to Pollachi',
    busTiming: '4:35 PM'
},
'5:00pm': {
    busNo: '46',
    busRoute: 'Mettuvavi to Pollachi',
    busTiming: '5:00 PM'
},
'5:20pm': {
    busNo: 'S2',
    busRoute: 'Sulthanpet to Kinathukadavu',
    busTiming: '5:20 PM'
},
'5:45pm': {
    busNo: '4B',
    busRoute: 'Mettuvavi to Pollachi',
    busTiming: '5:45 PM'
},
'6:10pm': {
    busNo: 'S2',
    busRoute: 'Tirupur to Kinathukadavu',
    busTiming: '6:10 PM'
},
'6:20pm': {
    busNo: '33D',
    busRoute: 'Kattampatti to Gandhipuram',
    busTiming: '6:20 PM'
},
'7:40pm': {
    busNo: 'S2',
    busRoute: 'Sulthanpet to Kinathukadavu',
    busTiming: '7:40 PM'
},
'10:00pm': {
    busNo: 'Mofesil Bus',
    busRoute: 'Tirupur to Kinathukadavu',
    busTiming: '10:00 PM'
}
        // Your bus information here...
    };

    const [searchInput, setSearchInput] = useState('');
    const [filteredRoutes, setFilteredRoutes] = useState([]);
    const [selectedRoute, setSelectedRoute] = useState(null);
  
    // Function to handle search input change
    const handleSearchInputChange = (e) => {
      const inputValue = e.target.value.toLowerCase();
      setSearchInput(inputValue);
      const results = Object.keys(busInfo).filter(route => route.toLowerCase().includes(inputValue));
      setFilteredRoutes(results);
    };
  
    // Function to handle selecting a route
    const handleRouteSelection = (route) => {
      setSelectedRoute(route);
    };
  
    return (
      <>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>OUT Bus</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <input
            type="text"
            id="input-box"
            className="search-input"
            placeholder="Search..."
            autoComplete="off"
            value={searchInput}
            onChange={handleSearchInputChange}
            style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button className="search-button" style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Search
          </button>
        </div>
        <div className="info" style={{ marginTop: '20px', textAlign: 'center' }}>
          {/* Display selected route information */}
          {selectedRoute && (
            <div>
              <p>Bus No: <strong>{busInfo[selectedRoute].busNo}</strong></p>
              <p>Bus Route: <strong>{busInfo[selectedRoute].busRoute}</strong></p>
              <p>Bus Timing: <strong>{busInfo[selectedRoute].busTiming}</strong></p>
            </div>
          )}
        </div>
        <div className="result-box" style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', display: 'block' }}>
          {/* Display filtered routes */}
          <ul>
            {filteredRoutes.map((route, index) => (
              <li key={index} style={{ cursor: 'pointer' }} onClick={() => handleRouteSelection(route)}>{route}</li>
            ))}
          </ul>
        </div>
        <button className="back-button" style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Back
        </button>
      </>
    );
  };
  
  export default Bus;