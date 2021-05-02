import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './helpers/data/authorData';

function AuthorForm({
  formTitle,
  setAuthors,
  firstName,
  lastName,
  email,
  firebaseKey
}) {
  const [author, setAuthor] = useState({
    first_name: firstName || '',
    last_name: lastName || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    } else {
      addAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    }
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
        value={author.first_name}
        ></input>
        <label>Last Name: </label>
        <input
        name='last_name'
        type='text'
        placeholder='Last Name'
        value={author.last_name}
        onChange={handleInputChange}
        ></input>
        <label>Email: </label>
        <input
        name='email'
        type='text'
        placeholder='Email'
        value={author.email}
        onChange={handleInputChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
