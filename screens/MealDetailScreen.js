import React from "react";
import PropTypes from "prop-types";
import { Button, Text, View } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";

const MealDetailScreen = ({ navigation }) => {
	return (
		<View style={LayoutStyle.screen}>
			<Text>The Meal Detail Screen</Text>
			<Button title="Go Back to Categories" onPress={() => navigation.popToTop()} />
		</View>
	);
};

MealDetailScreen.propTypes = {};

export default MealDetailScreen;
