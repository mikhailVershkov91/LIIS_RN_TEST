import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { deactivateLike, activateLike } from "../store/ticketsReducer";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
	let depatureDate = new Date(
		props.tickets.data.Dates.OutboundDates[0].PartialDate
	)
		.toUTCString()
		.slice(5, 16);

	const dispatch = useDispatch();
	const likeIsActive = useSelector((state) => state.tickets.likeIsActive);

	const onPress = () => {
		if (likeIsActive === true) {
			dispatch(deactivateLike());
		} else {
			dispatch(activateLike());
		}
	};

	return (
		<View style={styles.card}>
			<View style={styles.infoContainer}>
				<View style={styles.infoTopRow}>
					<View>
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
							<Text style={styles.smallText}>{depatureDate}</Text>
							<Image source={require("../../assets/Dash.png")} />
							<Text style={styles.smallText}>
								{props.tickets.data.Dates.OutboundDates[0].QuoteDateTime.slice(
									11,
									-3
								)}
							</Text>
						</View>
						<View>
							<Text style={styles.smallText}>
								{props.tickets.data.Carriers[0].Name}
							</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.favourites} onPress={onPress}>
						{likeIsActive && (
							<Image source={require("../../assets/FullHeart.png")} />
						)}
						{!likeIsActive && (
							<Image source={require("../../assets/EmptyHeart.png")} />
						)}
					</TouchableOpacity>
				</View>
				<View style={styles.line}>
					<Image source={require("../../assets/Line.png")} />
				</View>
				<View style={styles.infoBottom}>
					<Text style={styles.superSmallText}>Price:</Text>
					<Text style={styles.bigText}>
						{props.tickets.data.Quotes[0].MinPrice} ₽
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 335,
		height: 135,
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
	infoContainer: {
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	infoTopRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		marginTop: 10,
	},
	details: {
		width: 200,
	},
	cities: {
		marginBottom: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	departure: {
		marginBottom: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	favourites: {
		marginRight: 5,
		marginTop: -7,
	},
	line: {
		marginTop: 15,
		marginLeft: 10,
	},
	infoBottom: {
		marginTop: 7,
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
