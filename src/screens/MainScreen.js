import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Card";

export const MainScreen = ({ navigation }) => {
	const goToTicket = () => {
		navigation.navigate("Ticket");
	};
	const numberOfCards = 4;
	return (
		<View style={styles.center}>
			<Text>MainScreen</Text>
			<Button title="Go to ticket" onPress={goToTicket} />
			{[...Array(numberOfCards)].map(() => (
				<Card />
			))}
		</View>
	);
};

MainScreen.navigationOptions = {
	headerTitle: "Flights",
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
