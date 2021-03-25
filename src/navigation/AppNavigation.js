import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { TicketScreen } from "../screens/TicketScreen";
import { THEME } from "../theme";

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

export const AppNavigation = createAppContainer(TicketNavigator);
