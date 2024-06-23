import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      return;
    }
    if (password !== passwordConfirmation) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://your-backend-api/reset-password', {
        token,
        password,
        password_confirmation: passwordConfirmation,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error resetting password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#C3D21F] h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Reset Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password (min 8 characters)"
          className="w-full xl:text-base lg:text-base md:text-base text-sm px-4 py-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm new password"
          className="w-full xl:text-base lg:text-base md:text-base text-sm px-4 py-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full px-4 py-2 text-white bg-[#4E73DF] rounded-full">
          Reset Password
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
