import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
	const goToTicket = () => {
		navigation.navigate("Ticket");
	};
	return (
		<View style={styles.center}>
			<Text>MainScreen</Text>
			<Button title="Go to ticket" onPress={goToTicket} />
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
