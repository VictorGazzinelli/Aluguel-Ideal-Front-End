import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import GlobalStyle from './styles/global';

import loginPaths from './routes/login/loginPaths';
import LoginRoutes from './routes/login/LoginRoutes';
import commonPaths from './routes/common/commonPaths';
import CommonRoutes from './routes/common/CommonRoutes';

const App:React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Switch>
              <Route path={commonPaths.home}>
                  <CommonRoutes />
              </Route>
              <Route path={loginPaths.root}>
                  <LoginRoutes />
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
