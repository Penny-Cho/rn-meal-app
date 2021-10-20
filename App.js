import React from "react";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

export default function App() {
	enableScreens();

	return <MealsNavigator />;
}
