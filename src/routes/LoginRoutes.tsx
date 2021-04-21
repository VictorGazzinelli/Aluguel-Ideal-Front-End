import { useEffect } from 'react';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';

import loginPaths from './loginPaths';
import TemplateLogin from '../templates/TemplateLogin';
import LoginScreen from '../pages/login/LoginScreen';
import SignupScreen from '../pages/signup/SignupScreen';

const LoginRoutes = () => {
  const location = useLocation();
  const history = useHistory();

  const onRouteChange = () => {
      if (location.pathname === loginPaths.root)
        history.push(loginPaths.login);
  };
  useEffect(onRouteChange, [location]);

  return (
    <TemplateLogin
      loginComponent={(
        <Switch>
          <Route path={loginPaths.login}>
              <LoginScreen/>
          </Route>
          <Route path={loginPaths.signUp}>
              <SignupScreen/>
          </Route>
        </Switch>
      )}
    />
  )
};

export default LoginRoutes;
