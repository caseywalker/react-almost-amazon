import React, { useState } from 'react';
import addAuthor from './helpers/data/authorData';

function AuthorForm() {
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
    addAuthor(author);
  };

  return (
    <div className='author-form'>
      <form
      id='add-author-form'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>New Author Form</h2>
        <label>First Name: </label>
        <input
        name='first_name'
        type='text'
        placeholder='First Name'
        value={author.first_name}
        onChange={handleInputChange}
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

export default AuthorForm;
