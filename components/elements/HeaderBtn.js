import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";

const HeaderBtn = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={25}
			color={Platform.OS === "android" ? Colors.white : Colors.secondary}
		/>
	);
};

export default HeaderBtn;
