import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor } from './helpers/data/authorData';

function AuthorForm({ formTitle, setAuthors }) {
  const [author, setAuthor] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author).then((authorsArray) => setAuthors(authorsArray));
  };

  return (
    <div className='author-form'>
      <form
      id='add-author-form'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <label>First Name: </label>
        <input
        name='first_name'
        type='text'
        placeholder='First Name'
        value={author.first_name.value}
        onChange={handleInputChange}
        ></input>
        <label>Last Name: </label>
        <input
        name='last_name'
        type='text'
        placeholder='Last Name'
        value={author.last_name.value}
        onChange={handleInputChange}
        ></input>
        <label>Email: </label>
        <input
        name='email'
        type='text'
        placeholder='Email'
        value={author.email.value}
        onChange={handleInputChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorForm;
