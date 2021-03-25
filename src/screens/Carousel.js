import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Carousel = () => {
	return (
		<View>
			<ScrollView horizontal>
				<Image source={require("../../assets/city1.png")} />
				<Image source={require("../../assets/city2.png")} />
				<Image source={require("../../assets/city1.png")} />
				<Image source={require("../../assets/city2.png")} />
			</ScrollView>
		</View>
	);
};

export default Carousel;
