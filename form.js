
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Product Order Form</h2>
      <Form setFormData={setFormData} />
      {formData && <Output data={formData} />}
    </div>
  );
}

function Form({ setFormData }) {
  const [form, setForm] = useState({
    productName: "",
    description: "",
    category: "",
    brandName: "",
    regularPrice: "",
    salePrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    setFormData(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      <label><b>Product Name</b></label>
      <input type="text" name="productName" value={form.productName} onChange={handleChange} required placeholder="Enter product name" />

      <label><b>Description</b></label>
      <textarea name="description" value={form.description} onChange={handleChange} required placeholder="Enter product description" rows="3"></textarea>

      <label><b>Category</b></label>
      <input type="text" name="category" value={form.category} onChange={handleChange} required placeholder="Enter category" />

      <label><b>Brand Name</b></label>
      <input type="text" name="brandName" value={form.brandName} onChange={handleChange} required placeholder="Enter brand name" />

      <label><b>Regular Price (₹)</b></label>
      <input type="number" name="regularPrice" value={form.regularPrice} onChange={handleChange} required placeholder="Enter regular price" min="0" />

      <label><b>Sale Price (₹)</b></label>
      <input type="number" name="salePrice" value={form.salePrice} onChange={handleChange} required placeholder="Enter sale price" min="0" />

      <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "green", color: "white", borderRadius: "20px", border: "none", cursor: "pointer" }}>
        Submit Order
      </button>
    </form>
  );
}

function Output({ data }) {
  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", maxWidth: "400px", margin: "auto", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <h3>Order Summary</h3>
      <p><b>Product Name:</b> {data.productName}</p>
      <p><b>Description:</b> {data.description}</p>
      <p><b>Category:</b> {data.category}</p>
      <p><b>Brand Name:</b> {data.brandName}</p>
      <p><b>Regular Price:</b> ₹{data.regularPrice}</p>
      <p><b>Sale Price:</b> ₹{data.salePrice}</p>
    </div>
  );
}

export default App;
