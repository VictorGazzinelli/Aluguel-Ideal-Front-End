import React from 'react';
import {Switch, Route} from 'react-router-dom';

import commonPaths from "./commonPaths"
import FilterScreen from '../../pages/filter/FilterScreen';
import LandingScreen from '../../pages/landing/LandingScreen';
import LoginScreen from '../../pages/login/LoginScreen';
import ResidenceScreen from '../../pages/residence/ResidenceScreen';
import SearchScreen from '../../pages/search/SearchScreen';
import UserScreen from '../../pages/user/UserScreen';
import UsersScreen from '../../pages/users/UsersScreen';
import FormFillTemplate from '../../templates/FormFillTemplate';


const CommonRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path={commonPaths.landing} exact>
          <FormFillTemplate organismComponent={
              <LandingScreen />
            }
          />
        </Route>
        <Route path={commonPaths.login}>
          <FormFillTemplate organismComponent={
              <LoginScreen />
            }
          />
        </Route>
        <Route path={commonPaths.search}>
          <SearchScreen />
        </Route>
        <Route path={commonPaths.residence}>
          <ResidenceScreen />
        </Route>
        <Route path={commonPaths.filter}>
          <FilterScreen />
        </Route>
        <Route path={commonPaths.user}>
          <FormFillTemplate organismComponent={
                <UserScreen />
            }
          />
        </Route>
        <Route path={commonPaths.users}>
          <UsersScreen />
        </Route>
      </Switch>
    </div>
  )
};

export default CommonRoutes;
