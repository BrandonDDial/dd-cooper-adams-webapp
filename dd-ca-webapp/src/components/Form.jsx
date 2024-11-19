// FILE: src/components/Form.jsx

import React, { useState } from 'react';
import './Form.css';

export function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobType: '',
    description: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Job Type:
        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="concrete">Concrete</option>
          <option value="tractor">Tractor</option>
        </select>
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Upload Images:
        <input type="file" multiple onChange={handleFileChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}