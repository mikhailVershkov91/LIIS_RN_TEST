import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { TicketScreen } from "../screens/TicketScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FavoritesScreen } from "../screens/FavoritesScreen";

const MainNavigator = createStackNavigator({
	Main: {
		screen: MainScreen,
		navigationOptions: {
			title: "Flights",
		},
	},
	Ticket: {
		screen: TicketScreen,
		navigationOptions: {
			title: "Ticket info",
			header: null,
		},
	},
});

const FavoritesNavigator = createStackNavigator({
	Favorites: FavoritesScreen,
	Ticket: {
		screen: TicketScreen,
		navigationOptions: {
			title: "Ticket info",
			header: null,
		},
	}
});

const TopNavigator = createBottomTabNavigator({
	Browse: {
		screen: MainNavigator,
		navigationOptions: {
			headerTitle: "Browse",
		},
	},
	Favorites: {
		screen: FavoritesNavigator,
	},
});

export const AppNavigation = createAppContainer(TopNavigator);
