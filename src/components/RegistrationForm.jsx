import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let localErrors = {};
    if (!formData.name.trim()) localErrors.name = "Name is required.";
    if (!formData.email.includes('@')) localErrors.email = "Invalid email format.";
    if (formData.password.length < 6) localErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) localErrors.confirmPassword = "Passwords do not match.";
    
    setErrors(localErrors);
    if (Object.keys(localErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <div style={{ background: '#1a1a1e', padding: '20px', borderRadius: '12px', border: '1px solid #3f3f46' }}>
      <h3 style={{ color: '#646cff', margin: '0 0 15px 0' }}>Task 1: User Registration Form</h3>
      {isSubmitted && <p style={{ color: '#10b981' }}>🎉 Registration Successful!</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ padding: '8px', background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '4px' }} />
        {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name}</span>}
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ padding: '8px', background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '4px' }} />
        {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email}</span>}
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{ padding: '8px', background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '4px' }} />
        {errors.password && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.password}</span>}
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={{ padding: '8px', background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '4px' }} />
        {errors.confirmPassword && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.confirmPassword}</span>}
        <button type="submit" style={{ background: '#646cff', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;