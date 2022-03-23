import React, { useState } from 'react';
const Form1 = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    let errors = validation;
    const emailCondition = "/^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[A-ZA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!inputValues.email.match(emailCondition)) {
      errors.email = 'Type a valid mail';
    } else {
      errors.email = '';
    }

    const cond1 = '/^(?=.*[a-z]).{8,20}$/';
    const cond2 = '/^(?=.*[A-Z]).{8,20}$/';
    const cond3 = '/^(?=.*[0-9]).{8,20}$/';
    const password = inputValues.password;
    if (!password) {
      errors.password = 'Password is required';
    } else if (!password.match(cond1)) {
      errors.password = 'Password must contain 2 small characters';
    } else if (!password.match(cond2)) {
      errors.password = 'Password must contain 2 large characters';
    } else if (!password.match(cond2)) {
      errors.password = 'Password must contain 2 numbers';
    }
  };
  return (
    <>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          placeholder="email"
          type="email"
          onChange={e => handleChange(e)}
          value={inputValues.email}
          required
        />
        {validation.email && <p>validation.email</p>}

        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          onChange={e => handleChange(e)}
          value={inputValues.password}
          required
        />
        {validation.p && <p>validation.password</p>}
        <button>Back</button>
        <button type="submit">Save</button>
        <button>Save & next</button>
      </form>
    </>
  );
};

export default Form1;
