import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { loadTickets } from "../store/ticketsReducer";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

export const MainScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTickets());
	}, []);

	const tickets = useSelector((state) => state.tickets.tickets);
	const cards = useSelector((state) => state.tickets.cards);

	return (
		<View style={styles.center}>
			<ScrollView>
				{tickets.data &&
					cards.map((card, key) => (
						<Card
							key={card.id}
							card={card}
							tickets={tickets}
							navigation={navigation}
						/>
					))}
			</ScrollView>
		</View>
	);
};

MainScreen.navigationOptions = {
	headerTitle: "Flights",
	// tabBarOptions: {
	// 	labelStyle: {
	// 		fontSize: 12,
	// 	},
	// 	tabStyle: {
	// 		width: 100,
	// 	},
	// 	style: {
	// 		backgroundColor: "blue",
	// 	},
	// },
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
