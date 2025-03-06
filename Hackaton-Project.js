//! Hackaton Registration form with dropdown option

import React, { useState } from "react";

const HackathonRegistration = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    food: "",
  });


  const [submittedData, setSubmittedData] = useState([]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    setSubmittedData([...submittedData, formData]);


    setFormData({ name: "", email: "", phone: "", city: "", food: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Hackathon Registration</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /><br />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /><br />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /><br />
          <input
            type="text"
            name="city"
            placeholder="Enter your City"
            value={formData.city}
            onChange={handleChange}
            required
            className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /><br />
          <select
            name="food"
            value={formData.food}
            onChange={handleChange}
            required
            className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ><br />
            <option value="">Select Food Preference</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select><br />
          

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          ><br />
            Submit
          </button>
        </form>
      </div>

      {/* Table */}
      {submittedData.length > 0 && (
        <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-3">Registered Participants</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-3">Name</th> <br />
                <th className="border p-3">Email</th> <br />
                <th className="border p-3">Phone</th> <br />
                <th className="border p-3">City</th> <br />
                <th className="border p-3">Food</th> <br />
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index} className="text-center border hover:bg-gray-100 transition duration-300">
                  <td className="border p-3">{data.name}</td> <br />
                  <td className="border p-3">{data.email}</td> <br />
                  <td className="border p-3">{data.phone}</td> <br />
                  <td className="border p-3">{data.city}</td> <br />
                  <td className="border p-3">{data.food}</td> <br />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HackathonRegistration;
//! ================================================================================================================================= //
