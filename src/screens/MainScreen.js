import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { loadTickets } from "../store/ticketsReducer";
import { useSelector } from "react-redux";

export const MainScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTickets());
	}, []);

	const tickets = useSelector((state) => state.tickets.tickets);

	// console.log(tickets);

	// const goToTicket = () => {
	// 	navigation.navigate("Ticket");
	// };
	// const numberOfCards = 4;
	return (
		<View style={styles.center}>
			<Text>MainScreen</Text>
			{tickets.data && <Text>{tickets.data.Carriers[0].Name}</Text>}
			{/* <Button title="Go to ticket" onPress={goToTicket} />
			{[...Array(numberOfCards)].map(() => (
				<Card />
			))} */}
		</View>
	);
};

MainScreen.navigationOptions = {
	headerTitle: "Flights",
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
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
