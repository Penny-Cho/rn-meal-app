import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/elements/HeaderBtn";
import Colors from "../styles/Colors";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ navigation }) => {
	const availableMeals = useSelector((state) => state.meals.meals);
	const mealId = navigation.getParam("mealId");
	const currentMealIsFavorite = useSelector((state) =>
		state.meals.favoriteMeals.some((meal) => meal.id === mealId)
	);

	const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);

	useEffect(() => {
		navigation.setParams({ toggleFav: toggleFavoriteHandler });
	}, [toggleFavoriteHandler]);

	useEffect(() => {
		navigation.setParams({ isFav: currentMealIsFavorite });
	}, [currentMealIsFavorite]);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity}</Text>
				<Text>{selectedMeal.affordability}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text style={styles.desc} key={ingredient}>
					{ingredient}
				</Text>
			))}
			<Text style={styles.title}>Steps</Text>
			<Text style={styles.desc}>{selectedMeal.steps}</Text>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (data) => {
	const mealTitle = data.navigation.getParam("mealTitle");
	const toggleFav = data.navigation.getParam("toggleFav");
	const isFavorite = data.navigation.getParam("isFav");
	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderBtn}>
				<Item
					title={isFavorite ? "add Fav" : "no Fav"}
					iconName={isFavorite ? "ios-star" : "ios-star-outline"}
					onPress={toggleFav}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	desc: {
		paddingHorizontal: 10,
		color: Colors.darkGrey,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
});

MealDetailScreen.propTypes = {
	navigation: PropTypes.object,
};

export default MealDetailScreen;
