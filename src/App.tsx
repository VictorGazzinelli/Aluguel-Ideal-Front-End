import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import GlobalStyle from './styles/global';

import loginPaths from './routes/loginPaths';
import LoginRoutes from './routes/LoginRoutes'

const App:React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Switch>
              <Route path={loginPaths.root}>
                  <LoginRoutes />
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
