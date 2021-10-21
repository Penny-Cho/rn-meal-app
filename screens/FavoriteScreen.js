import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";
import MealList from "../components/preDefined/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/elements/HeaderBtn";
import { MainNavigator } from "../navigation/MealsNavigator";
import { useSelector } from "react-redux";

const FavoriteScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<Text>No favorite meals. Go Start adding some!</Text>
			</View>
		);
	}

	return (
		<View style={LayoutStyle.screen}>
			<MealList listData={favMeals} navigation={props.navigation} />
		</View>
	);
};

FavoriteScreen.navigationOptions = (navData) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderBtn}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer(MainNavigator);
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FavoriteScreen;
