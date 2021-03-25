import * as Font from "expo-font";

export async function bootstrap() {
	await Font.loadAsync({
		"abel-reg": require("../assets/fonts/AbelReg.ttf"),
		"sf-pro": require("../assets/fonts/SfPro.ttf"),
		"tegomin-reg": require("../assets/fonts/TegominReg.ttf"),
	});
}
