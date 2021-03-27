import * as Font from "expo-font";

export async function bootstrap() {
	await Font.loadAsync({
		Abel: require("../assets/fonts/Abel.ttf"),
		"sf-pro": require("../assets/fonts/SfPro.ttf"),
	});
}
