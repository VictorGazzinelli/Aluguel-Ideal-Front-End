import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import commonPaths from './routes/common/commonPaths';
import CommonRoutes from './routes/common/CommonRoutes';
import { themeConfig } from './styles/themeConfig';

import "@fontsource/poppins"
import ResidenceProvider from './providers/ResidenceProvider';

const App:React.FC = () =>  (
	<ChakraProvider theme={themeConfig}>
		<ResidenceProvider>
			<BrowserRouter> 
				<Switch>
					<Route path={commonPaths.root}>
						<CommonRoutes />
					</Route>
				</Switch> 
			</BrowserRouter>	
		</ResidenceProvider>
	</ChakraProvider>
); 

export default App;
