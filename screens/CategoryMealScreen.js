import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, StyleSheet } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";
import { CATEGORIES } from "../data/dummyData";
import MealItem from "../components/preDefined/MealItem";
import { useSelector } from "react-redux";

const CategoryMealScreen = ({ navigation }) => {
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const catId = navigation.getParam("categoryId");
	const displayedMeals = availableMeals.filter((meal) => meal.categoryId.indexOf(catId) >= 0);

	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					navigation.navigate({
						routeName: "MealDetail",
						params: {
							mealId: itemData.item.id,
						},
					});
				}}
			/>
		);
	};

	return (
		<View style={LayoutStyle.screen}>
			<View style={styles.root}>
				<FlatList
					data={displayedMeals}
					renderItem={renderMealItem}
					style={{ width: "100%" }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 20,
	},
});

CategoryMealScreen.navigationOptions = (data) => {
	const catId = data.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
	return {
		headerTitle: selectedCategory.title,
	};
};

CategoryMealScreen.propTypes = {
	navigation: PropTypes.object,
};

export default CategoryMealScreen;
