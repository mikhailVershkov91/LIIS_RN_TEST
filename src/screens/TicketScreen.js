import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Carousel from "./Carousel";
import { useSelector, useDispatch } from "react-redux";
import { deactivateLike, activateLike } from "../store/ticketsReducer";

export const TicketScreen = ({ navigation }) => {
	const cardId = navigation.getParam("cardId");

	const dispatch = useDispatch();
	const tickets = useSelector((state) => state.tickets.tickets);
	const likeIsActive = useSelector((state) =>
		state.tickets.cards.some(
			(card) => card.id === cardId && card.likeIsActive === true
		)
	);

	useEffect(() => {
		navigation.setParams({ likeIsActive });
	}, [likeIsActive]);

	const onPress = () => {
		if (likeIsActive === true) {
			dispatch(deactivateLike(cardId));
		} else {
			dispatch(activateLike(cardId));
		}
	};

	const depatureDate = new Date(tickets.data.Dates.OutboundDates[0].PartialDate)
		.toUTCString()
		.slice(5, 16);

	const depatureTime = tickets.data.Dates.OutboundDates[0].QuoteDateTime.slice(
		11,
		-3
	);

	return (
		<View style={styles.main}>
			{tickets.data && (
				<>
					<View style={styles.image}>
						<Image source={require("../../assets/mainImage.png")} />
					</View>
					<View style={styles.ticketContainer}>
						<TouchableOpacity style={styles.favourites} onPress={onPress}>
							{likeIsActive ? (
								<Image source={require("../../assets/FullHeart.png")} />
							) : (
								<Image source={require("../../assets/EmptyHeart.png")} />
							)}
						</TouchableOpacity>
						<View style={styles.infoContainer}>
							<View style={styles.info}>
								<View style={styles.infoText}>
									<Text style={styles.smallText}>{depatureDate}</Text>
									<Text style={styles.bigText}>SVO</Text>
									<Text style={styles.smallText}>Moscow</Text>
								</View>
								<View>
									<Image source={require("../../assets/Vector1.png")} />
								</View>
								<View>
									<Text style={styles.smallText}>{depatureTime}</Text>
									<Text style={styles.bigText}>JFK</Text>
									<Text style={styles.smallText}>New York City</Text>
								</View>
							</View>
						</View>
						<View style={styles.detailsContainer}>
							<View style={styles.details}>
								<View style={styles.detailsItem}>
									<Text style={styles.smallDetailsText}>Price</Text>
									<Text style={styles.mediumText}>
										{tickets.data.Quotes[0].MinPrice} ₽
									</Text>
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
							<Carousel />
						</View>
					</View>
				</>
			)}
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
