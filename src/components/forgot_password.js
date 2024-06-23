import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending reset link. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#C3D21F] h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Forgot Password</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 mb-4 border rounded" required />
        <button type="submit" className="w-full px-4 py-2 text-white bg-[#4E73DF] rounded-full">
          Send Reset Link
        </button>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
