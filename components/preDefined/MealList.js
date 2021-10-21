import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	const renderMealItem = (itemData) => {
		const isFavorite = favMeals.some((meal) => meal.id === itemData.item.id);
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: "MealDetail",
						params: {
							mealId: itemData.item.id,
							mealTitle: itemData.item.title,
							isFav: isFavorite,
						},
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.root}>
			<FlatList data={props.listData} renderItem={renderMealItem} style={{ width: "100%" }} />
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 20,
	},
});

MealList.propTypes = {};

export default MealList;
