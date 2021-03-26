import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { loadTickets } from "../store/ticketsReducer";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

export const FavoritesScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTickets());
	}, []);

	const tickets = useSelector((state) => state.tickets.tickets);
	const cards = useSelector((state) => state.tickets.cards);
	const filteredCards = cards.filter((card) => card.likeIsActive);
	console.log(filteredCards);

	return (
		<View style={styles.center}>
			<ScrollView>
				{tickets.data &&
					filteredCards.map((card, key) => (
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

FavoritesScreen.navigationOptions = {
	// headerTitle: "Favorites",
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
