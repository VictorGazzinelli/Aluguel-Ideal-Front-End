import { BrowserRouter, Switch, Route } from 'react-router-dom';

import commonPaths from './routes/common/commonPaths';
import CommonRoutes from './routes/common/CommonRoutes';

const App:React.FC = () => {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path={commonPaths.landing}>
                <CommonRoutes />
            </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
