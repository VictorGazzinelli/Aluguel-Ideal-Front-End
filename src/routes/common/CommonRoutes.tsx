import { Switch, Route, Redirect } from 'react-router-dom';

import commonPaths from "./commonPaths"
import FilterScreen from '../../pages/filter/FilterScreen';
import LandingScreen from '../../pages/landing/LandingScreen';
import LoginScreen from '../../pages/login/LoginScreen';
import ResidenceScreen from '../../pages/residence/ResidenceScreen';
import SearchScreen from '../../pages/search/SearchScreen';
import UserScreen from '../../pages/user/UserScreen';
import UsersScreen from '../../pages/users/UsersScreen';
import FormFillTemplate from '../../templates/FormFillTemplate';
import CommonTopBar from './CommonTopBar';
import { Flex } from '@chakra-ui/layout';

const CommonRoutes = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			overflow='hidden'
			direction='column'
		>
			<CommonTopBar />
			<Switch>
				<Route path={commonPaths.landing}>
					<LandingScreen />
				</Route>

				<Route path={commonPaths.login}>
					<LoginScreen />
				</Route>

				<Route path={commonPaths.search}>
					<SearchScreen />
				</Route>

				<Route path={commonPaths.filter}>
					<FilterScreen />
				</Route>

				<Route path={commonPaths.user}>
					<FormFillTemplate organismComponent={<UserScreen />}/>
				</Route>

				<Route path={commonPaths.users}>
					<UsersScreen />
				</Route> 

				{/*<Route path={commonPaths.residence}>
					<ResidenceScreen />
				</Route>
				*/}

				<Redirect from='/*' to={commonPaths.landing} />
			</Switch>
		</Flex>
	)
};

export default CommonRoutes;
