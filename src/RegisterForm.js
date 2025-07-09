import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = ({close}) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering! Your registration has been submitted.');
    setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    close()
  };

  return (
    <div className="form-glow-wrapper d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="p-4 form-glow shadow">
        <h3 className="text-center mb-3">Register For The FREE Webinar</h3>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name*</label>
          <input type="text" id="firstName" name="firstName" className="form-control" value={form.firstName} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name*</label>
          <input type="text" id="lastName" name="lastName" className="form-control" value={form.lastName} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Business Email*</label>
          <input type="email" id="email" name="email" className="form-control" value={form.email} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number*</label>
          <input type="tel"  id="phone"  name="phone"  className="form-control"  value={form.phone}  onChange={handleChange} required/>
        </div>

        <div className="d-grid mt-3">
          <button type="submit" className="btn btn-danger shadow-sm"> SECURE YOUR SEAT </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
