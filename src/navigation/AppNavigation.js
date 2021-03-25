import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { TicketScreen } from "../screens/TicketScreen";
import { THEME } from "../theme";
// import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FavoritesScreen } from "../screens/FavoritesScreen";

const TicketNavigator = createStackNavigator(
	{
		Main: MainScreen,
		Ticket: {
			screen: TicketScreen,
		},
	},
	{
		initialRouteName: "Main",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: THEME.MAIN_COLOR,
			},
		},
	}
);

const FavoritesNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		Ticket: TicketScreen,
	},
	{
		// defaultNavigationOptions: {
		// 	headerStyle: {
		// 		backgroundColor: THEME.MAIN_COLOR,
		// 	},
		// },
	}
);

const TopNavigator = createBottomTabNavigator({
	Browse: {
		screen: TicketNavigator,
		navigationOptions: {
			headerTitle: "Browse",
		},
	},
	Favorites: {
		screen: FavoritesNavigator,
		tabBarOptions: {
			labelStyle: {
				fontSize: 12,
			},
			tabStyle: {
				width: 100,
			},
			style: {
				backgroundColor: "blue",
			},
		},
	},
});

export const AppNavigation = createAppContainer(TopNavigator);
