import React, { useState } from 'react';
import '../input.css';

export default function SignUp() {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for check the erorrs
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [passwordsMatch, setPasswordMatch] = useState(false);

  const userInfo = {
    name: name,
    email: email,
    password: password
  };

  // Helper functions
  // Name/Email/Password changes
  const enterName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const enterEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const enterPassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const enterConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const saveData = (userInfo) => {};

  // Form Submission
  const createAccount = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setError(true);
      setPasswordMatch(false);
    } else if (password !== confirmPassword) {
      setPasswordMatch(true);
    } else {
      setSubmitted(true);
      setError(false);
      saveData(userInfo);
    }
  };

  // Showing Success Message
  const successMessage = () => {
    return (
      <div style={{ display: submitted ? '' : 'none' }}>
        <h1>User {name} successfully registered!</h1>
      </div>
    );
  };

  // Showing Error Message
  const errorMessage = () => {
    return (
      <div style={{ display: error ? '' : 'none' }}>
        <h1>Please enter all fields</h1>
      </div>
    );
  };

  // Confirm Passwords Match
  const confirmPasswordsMatch = () => {
    return (
      <div
        style={{
          display: passwordsMatch ? '' : 'none'
        }}
      >
        <p>Passwords Do Not Match</p>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2x1 font-bold text-center">Sign Up</h3>
        <form action="">
          <div class="mt-4">
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={enterName}
              value={name}
              name="name"
              type="text"
              placeholder="Full Name"
            />

            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={enterEmail}
              value={email}
              type="text"
              placeholder="Email"
            />

            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={enterPassword}
              value={password}
              type="password"
              placeholder="Password"
            />

            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={enterConfirmPassword}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password"
            />
            <button
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              onClick={createAccount}
              type="submit"
            >
              Create Account
            </button>
            <div className="text-xs text-red-400">
              {errorMessage()}
              {confirmPasswordsMatch()}
            </div>
            <div class="mt-6 text-grey-dark">
              Already have an account?
              <a class="text-blue-600 hover:underline" href="#">
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
