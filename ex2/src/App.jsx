import React, { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const birthDate = new Date(birthdate);

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    let prefix = '';

    if (gender === 'male') {
      prefix = 'Mr.';
    } else if (gender === 'female') {
      prefix = age < 18 ? 'Miss' : 'Ms.';
    } else {
      prefix = '';
    }

    const newGreeting = `Hello, ${prefix} ${name}, I know you are ${age} years old`;
    setGreeting(newGreeting);
  };

  return (
    <div className="container">
      <h1 className="instructions">Please provide us information so we can sell it to advertisers.</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>Birthdate:
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button className="submit-button" type="submit">Generate Greeting</button>
      </form>
      {greeting && <p className="greeting">{greeting}</p>}
    </div>
  );
}

export default App
