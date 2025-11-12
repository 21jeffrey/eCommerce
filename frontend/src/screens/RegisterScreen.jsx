import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState('');
  const namePattern = /^[A-Za-z0-9_ ]{3,}$/;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!namePattern.test(name)) {
      setFeedback('Name must be at least 3 characters and contain only letters, numbers, spaces, or underscores.');
      return;
    }
    if (!emailPattern.test(email)) {
      setFeedback('Please enter a valid email address.');
      return;
    }
    if (!passwordPattern.test(password)) {
      setFeedback('Password must be at least 6 characters and contain both letters and numbers.');
      return;
    }
    setFeedback('');
    // TODO: Dispatch register action
    // dispatch(register(name, email, password));
    navigate('/'); // Redirect after registration
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {feedback && (
        <div className={`mb-4 text-center ${feedback.includes('valid') ? 'text-red-600' : 'text-red-600'}`}>
          {feedback}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            pattern="[A-Za-z0-9_ ]{3,}"
            title="At least 3 characters, letters, numbers, spaces, or underscores."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Enter a valid email address."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}"
            title="At least 6 characters, must contain letters and numbers."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <a href="/login" className="text-blue-600">Login</a>
      </div>
    </div>
  );
};

export default RegisterScreen;
