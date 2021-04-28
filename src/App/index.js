import React, { useEffect, useState } from 'react';
import './App.scss';
import AuthorForm from '../AuthorForm';
import { getAuthors } from '../helpers/data/authorData';
import AuthorCard from '../components/AuthorCard';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((authorsArray) => setAuthors(authorsArray));
  }, []);

  return (
    <div className='App'>
      <AuthorForm formTitle='Add Author Form'/>
      <hr/>
      {authors.map((authorInfo) => (
        <AuthorCard key={authorInfo.firebaseKey}
        firstName={authorInfo.first_name}
        lastName={authorInfo.last_name}
        email={authorInfo.email}
        />
      ))}
    </div>
  );
}

export default App;
