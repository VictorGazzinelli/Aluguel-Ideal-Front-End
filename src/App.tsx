import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import commonPaths from './routes/common/commonPaths';
import CommonRoutes from './routes/common/CommonRoutes';
import { themeConfig } from './styles/themeConfig';

import "@fontsource/poppins"

const App:React.FC = () =>  (
	<ChakraProvider theme={themeConfig}>
		<BrowserRouter> 
			<Switch>
				<Route path={commonPaths.root}>
					<CommonRoutes />
				</Route>
			</Switch> 
		</BrowserRouter>	
	</ChakraProvider>
); 

export default App;
