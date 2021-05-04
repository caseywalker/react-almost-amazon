import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { getAuthors } from '../helpers/data/authorData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then((authorsArray) => setAuthors(authorsArray));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profielImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]

        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes authors={authors} setAuthors={setAuthors} />
      </Router>
    </div>
  );
}

export default App;
