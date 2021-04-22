import {Switch, Route} from 'react-router-dom';

import HomeScreen from "../../pages/home/HomeScreen"
import commonPaths from "./commonPaths"

const CommonRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path={commonPaths.home}>
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  )
};

export default CommonRoutes;
