import React from "react";
import { View, Image, StyleSheet, Text, VirtualizedList } from "react-native";

const Card = () => {
	return (
		<View style={styles.card}>
			<View style={styles.infoContainer}>
				<View style={styles.favourites}>
					<Image source={require("../../assets/FullHeart.png")} />
				</View>
				<View style={styles.infoTopRow}>
					<View style={styles.image}>
						<Image source={require("../../assets/Circle.png")} />
						<Image
							source={require("../../assets/Plane.png")}
							style={styles.plane}
						/>
					</View>
					<View style={styles.details}>
						<View style={styles.cities}>
							<Text style={styles.bigText}>Moscow</Text>
							<Image source={require("../../assets/Arrow.png")} />
							<Text style={styles.bigText}>New York</Text>
						</View>
						<View style={styles.departure}>
							<Text style={styles.smallText}>VKO</Text>
							<Image source={require("../../assets/Dash.png")} />
							<Text style={styles.smallText}>28 June, 2021</Text>
							<Image source={require("../../assets/Dash.png")} />
							<Text style={styles.smallText}>14:50</Text>
						</View>
						<View style={styles.company}>
							<Text style={styles.smallText}>Aeroflot</Text>
						</View>
					</View>
				</View>
				<View style={styles.line}>
					<Image source={require("../../assets/Line.png")} />
				</View>
				<View style={styles.infoBottom}>
					<Text style={styles.superSmallText}>Price:</Text>
					<Text style={styles.bigText}>23 311 ₽</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 335,
		height: 140,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginBottom: 10,
	},
	favourites: {
		position: "absolute",
		top: 17,
		left: 300,
	},
	infoContainer: {
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	infoTopRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},
	image: {
		marginLeft: 15,
	},
	details: {
		width: 200,
		marginRight: 44,
	},
	cities: {
		marginBottom: 5,
		paddingLeft: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	departure: {
		marginBottom: 5,
		paddingLeft: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	company: {
		paddingLeft: 10,
	},
	line: {
		marginTop: 15,
		marginLeft: 10,
	},
	infoBottom: {
		marginTop: 10,
		paddingRight: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	bigText: {
		fontSize: 17,
		color: "#404040",
	},
	smallText: {
		fontSize: 13,
		color: "#878787",
	},
	superSmallText: {
		fontSize: 11,
		color: "#878787",
		marginRight: 8,
	},
	plane: {
		top: 13,
		left: 13,
		position: "absolute",
	},
});

export default Card;
