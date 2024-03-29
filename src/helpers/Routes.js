import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Authors from '../views/Authors';
import AddAuthor from '../views/AddAuthor';
import SingleAuthor from '../views/SingleAuthor';
import NotFound from '../views/NotFound';

function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/authors' component={() => <Authors authors={authors} setAuthors={setAuthors} />} />
        <Route path='/authors/:firebaseKey' component={SingleAuthor} />
        <Route path='/add-authors' component={() => <AddAuthor setAuthors={setAuthors} />} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Routes;
