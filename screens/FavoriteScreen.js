import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";

const FavoriteScreen = (props) => {
	return (
		<View style={LayoutStyle.screen}>
			<Text>The Favorite Screen</Text>
		</View>
	);
};

FavoriteScreen.propTypes = {};

export default FavoriteScreen;
