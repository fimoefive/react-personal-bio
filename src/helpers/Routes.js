import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import SingleProject from '../views/SingleProject';

function Routes({ admin, projects, setProjects }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/projects'
            component={() => <Projects admin={admin} projects={projects} setProjects={setProjects} />}
          />
          <Route
            admin={admin}
            path='/projects/:firebaseKey'
            component={SingleProject}
          />
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
};

export default Routes;
