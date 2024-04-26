import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bus.css';

export default function CollegeBus() {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    route: '',
    date: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement logic to generate and print the ticket here
    printTicket();
  };

  // Function to print the ticket
  const printTicket = () => {
    const ticketContent = `
      <h2>Ticket Details</h2>
      <p>Name: ${formData.name}</p>
      <p>Roll Number: ${formData.rollno}</p>
      <p>Route: ${formData.route}</p>
      <p>Date: ${formData.date}</p>
    `;

    // Open a new window with the ticket content
    const newWindow = window.open('', '_blank');
    newWindow.document.body.innerHTML = ticketContent;
    newWindow.print(); // Print the ticket
  };

  return (
    <>
      <h1>College Bus Ticket Booking</h1>
      <Link to="/Main">
        <button>Home</button>
      </Link>
      <form id="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="rollno">Roll Number:</label>
        <input
          type="text"
          id="rollno"
          name="rollno"
          value={formData.rollno}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <div className="search-box">
          <label htmlFor="route">Route:</label>
          <input
            type="text"
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            placeholder="Find your route"
            autoComplete="off"
          />
          <div className="result-box" id="route-suggestions" />
        </div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" id="book-ticket">Book Ticket</button>
      </form>
      <div id="ticket-details">
        {/* Ticket details will be rendered here */}
      </div>
    </>
  );
}
