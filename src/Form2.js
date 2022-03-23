import React from 'react';

const Form2 = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    Lastname: '',
    Address: '',
  });
  const [validation, setValidation] = useState({
    firstName: '',
    Lastname: '',
    Address: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    let errors = validation;
    const cond = '/^(?=.*[a-zA-Z]).{2,20}$/';

    if (!inputValues.firstName.trim()) {
      errors.firstName = 'Firstname is required';
    } else if (!inputValues.firstName.match(cond)) {
      errors.firstName = 'Type a valid firstname';
    } else {
      errors.firstName = '';
    }

    const cond2 = '/^(?=.*[a-zA-Z]).{2,20}$/';

    if (!inputValues.Lastname.trim()) {
      errors.Lastname = 'Lastname is required';
    } else if (!inputValues.Lastname.match(cond2)) {
      errors.Lastname = 'Type a valid Lasttname';
    } else {
      errors.Lastname = '';
    }

    const cond3 = '/^(?=.*[a-zA-Z0-9]).{10,20}$/';

    if (!inputValues.Address.trim()) {
      errors.Address = 'Address is required';
    } else if (!inputValues.Address.match(cond3)) {
      errors.Address = 'Type a valid Address';
    } else {
      errors.Address = '';
    }
  };
  return (
    <>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label>Firstname</label>
        <input
          placeholder="FirstName"
          type="text"
          onChange={e => handleChange(e)}
          value={inputValues.firstName}
          required
        />
        {validation.firstName && <p>validation.firstName</p>}

        <label>Lastname</label>
        <input
          placeholder="Lastname"
          type="text"
          onChange={e => handleChange(e)}
          value={inputValues.Lastname}
          required
        />
        {validation.Lastname && <p>validation.Lastname</p>}

        <label>Address</label>
        <input
          placeholder="Address"
          type="text"
          onChange={e => handleChange(e)}
          value={inputValues.Address}
          required
        />
        {validation.Address && <p>validation.Address</p>}
        <button>Back</button>
        <button type="submit">Save</button>
        <button>Save & next</button>
      </form>
    </>
  );
};
export default Form2;
