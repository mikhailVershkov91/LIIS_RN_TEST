import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FavoritesScreen = () => {
	return (
		<View style={styles.center}>
			<Text>FavoritesScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});