import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { getAuthors } from '../helpers/data/authorData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((authorsArray) => setAuthors(authorsArray));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes authors={authors} setAuthors={setAuthors} />
      </Router>
    </div>
  );
}

export default App;
