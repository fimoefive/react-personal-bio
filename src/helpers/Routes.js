import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
// import SingleProject from '../views/SingleProject';

// const PrivateRoute = ({ component: Component, admin, ...rest }) => {
//   // when we call this function in the return, it is looking for an argument. `props` here is taco.
//   const routeChecker = (taco) => (admin
//     ? (<Component {...taco} admin={admin} />)
//     : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
//   // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
//   // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func,
//   admin: PropTypes.bool
// };

function Routes({ admin, projects, setProjects }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact path='/projects'
            component={() => <Projects admin={admin}
              projects={projects} setProjects={setProjects} />}
          />
          {/* <Route
            admin={admin}
            path='/project/:firebaseKey'
            component={SingleProject}
          /> */}
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
  admin: PropTypes.bool,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Routes;
