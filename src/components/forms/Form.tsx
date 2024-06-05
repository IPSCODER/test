"use client"
import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState([
    { id: 1, name: 'Form 1', data: { input1: '', input2: '' } },
    { id: 2, name: 'Form 2', data: { input1: '', input2: '' } },
    { id: 3, name: 'Form 3', data: { input1: '', input2: '' } },
    // Add more forms as needed
  ]);

  const handleSubmitAll = (event) => {
    event.preventDefault();
    formData.forEach(form => {
      // Perform form submission logic with form.data
      console.log(`Form ${form.id} submitted with data:`, form.data);
    });
  };

  const handleInputChange = (formId, fieldName, value) => {
    setFormData(prevState => prevState.map(item => item.id === formId ? { ...item, data: { ...item.data, [fieldName]: value } } : item));
  };

  return (
    <div>
      {formData.map(form => (
        <form key={form.id}>
          <h2>{form.name}</h2>
          {/* Render form inputs */}
          <label>Input 1:</label>
          <input 
            type="text" 
            value={form.data.input1} 
            onChange={(e) => handleInputChange(form.id, 'input1', e.target.value)} 
          />
          <label>Input 2:</label>
          <input 
            type="text" 
            value={form.data.input2} 
            onChange={(e) => handleInputChange(form.id, 'input2', e.target.value)} 
          />
          {/* Add more input fields */}
        </form>
      ))}
      <button onClick={handleSubmitAll}>Submit All Forms</button>
    </div>
  );
};

export default FormComponent;
