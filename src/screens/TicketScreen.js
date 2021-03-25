import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "./Carousel";

export const TicketScreen = () => {
	return (
		<View style={styles.main}>
			<View style={styles.image}>
				<Image source={require("../../assets/mainImage.png")} />
			</View>
			<View style={styles.ticketContainer}>
				<View style={styles.favourites}>
					<Image source={require("../../assets/FullHeart.png")} />
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.info}>
						<View style={styles.infoText}>
							<Text style={styles.smallText}>1 Aug, 2021</Text>
							<Text style={styles.bigText}>SVO</Text>
							<Text style={styles.smallText}>Moscow</Text>
						</View>
						<View>
							<Image source={require("../../assets/Vector1.png")} />
						</View>
						<View>
							<Text style={styles.smallText}>11:45</Text>
							<Text style={styles.bigText}>JFK</Text>
							<Text style={styles.smallText}>New York City</Text>
						</View>
					</View>
				</View>
				<View style={styles.detailsContainer}>
					<View style={styles.details}>
						<View style={styles.detailsItem}>
							<Text style={styles.smallDetailsText}>Price</Text>
							<Text style={styles.mediumText}>23311 ₽</Text>
						</View>
						<View>
							<Image source={require("../../assets/Verticalline.png")} />
						</View>
						<View style={styles.detailsItem}>
							<Text style={styles.smallDetailsText}>Boarding</Text>
							<Text style={styles.mediumText}>19:20</Text>
						</View>
					</View>
				</View>
				<View style={styles.carouselContainer}>
					<View style={styles.carousel}>
						<Carousel />
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {},
	image: {
		width: 100,
		height: 250,
	},
	ticketContainer: {
		borderRadius: 30,
		backgroundColor: "#FFFFFF",
		height: "100%",
	},
	favourites: {
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingHorizontal: 23,
		paddingTop: 17,
	},
	infoContainer: {
		marginTop: 2,
		marginHorizontal: 30,
	},
	info: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	infoText: {},
	detailsContainer: {
		paddingHorizontal: 30,
		paddingVertical: 17,
		backgroundColor: "#1157A7",
		marginHorizontal: 30,
		marginTop: 17,
		borderRadius: 10,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	detailsItem: {
		alignItems: "center",
	},
	carouselContainer: {
		marginTop: 23,
	},
	carousel: {
		// flexDirection: "row",
	},
	smallText: {
		fontSize: 13,
		color: "#878787",
	},
	smallDetailsText: {
		fontSize: 13,
		color: "#FFFFFF",
	},
	bigText: {
		// fontFamily: "tegomin-reg",
		fontSize: 36,
		color: "#404040",
	},
	mediumText: {
		// fontFamily: "tegomin-reg",
		fontSize: 20,
		color: "#FFFFFF",
	},
});
