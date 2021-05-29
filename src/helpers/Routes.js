import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Bio from '../components/Bio';
import Projects from '../views/Projects';
import SingleProject from '../views/SingleProject';
import Technologies from '../views/Technologies';
import Contact from '../components/Contact';
import SingleTech from '../views/SingleTech';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

function Routes({
  admin, projects,
  setProjects, technologies, setTechnologies
}) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/bio'
            component={Bio}
          />
          <PrivateRoute
            exact path='/projects'
            admin={admin}
            component={() => <Projects admin={admin}
              projects={projects} setProjects={setProjects} />}
          />
          <Route
            path='/projects/:firebaseKey'
            component={SingleProject}
          />
          <PrivateRoute
            exact path='/technologies'
            admin={admin}
            component={() => <Technologies admin={admin}
              technologies={technologies} setTechnologies={setTechnologies} />}
          />
          <Route
            path='/technologies/:firebaseKey'
            component={SingleTech}
          />
          <Route
            path='/contact'
            component={Contact}
          />
          {/* <PrivateRoute
            admin={admin}
            exact path='/edit-projects'
            component={() => <EditProjects
              projects={projects}
              setProjects={setProjects}
            />
            }
          /> */}
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func,
  admin: PropTypes.bool
};

export default Routes;
