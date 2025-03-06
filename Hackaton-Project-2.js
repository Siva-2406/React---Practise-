
//! Hackaton Registration form with checkbox

import React, { useState } from "react";

const HackathonRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    food: [],
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        food: checked ? [...prev.food, value] : prev.food.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", phone: "", city: "", food: [] });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Hackathon Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone", "city"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              required
              className="p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          ))}

          <label className="block font-medium">Select Food Preference:</label>
          <div className="flex flex-wrap gap-3">
            {["Breakfast", "Lunch", "Dinner"].map((meal) => (
              <label key={meal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="food"
                  value={meal}
                  checked={formData.food.includes(meal)}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span>{meal}</span>
              </label>
            ))}
          </div>

          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>

      {submittedData.length > 0 && (
        <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-3">Registered Participants</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                {["Name", "Email", "Phone", "City", "Food"].map((header) => (
                  <th key={header} className="border p-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index} className="text-center border hover:bg-gray-100">
                  {["name", "email", "phone", "city"].map((field) => (
                    <td key={field} className="border p-3">{data[field]}</td>
                  ))}
                  <td className="border p-3">{data.food.length ? data.food.join(", ") : "None"}</td>
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
//! ============================================================================================================================ //