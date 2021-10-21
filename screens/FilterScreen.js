import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Switch, Text, View, StyleSheet } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/elements/HeaderBtn";
import { MainNavigator } from "../navigation/MealsNavigator";
import Colors from "../styles/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterScreen = (props) => {
	const { navigation } = props;

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};

		dispatch(setFilters(appliedFilters));
		console.log(appliedFilters);
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	const SwitchContainer = ({ title, value, onValueChange }) => {
		return (
			<View style={styles.filterContainer}>
				<Text style={styles.item}>{title}</Text>
				<Switch
					value={value}
					onValueChange={onValueChange}
					trackColor={{ true: Colors.secondary }}
				/>
			</View>
		);
	};

	return (
		<View style={LayoutStyle.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<SwitchContainer
				title="Gluten Free"
				value={isLactoseFree}
				onValueChange={(newValue) => setIsLactoseFree(newValue)}
			/>
			<SwitchContainer
				title="Lactose-free"
				value={isGlutenFree}
				onValueChange={(newValue) => setIsGlutenFree(newValue)}
			/>
			<SwitchContainer
				title="Vegan"
				value={isVegan}
				onValueChange={(newValue) => setIsVegan(newValue)}
			/>
			<SwitchContainer
				title="Vegetarian"
				value={isVegetarian}
				onValueChange={(newValue) => setIsVegetarian(newValue)}
			/>
		</View>
	);
};

FilterScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Filter Meals",
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
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderBtn}>
				<Item
					title="Save"
					iconName="ios-save"
					onPress={() => {
						navData.navigation.getParam("save")();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		fontWeight: "bold",
		margin: 20,
		textAlign: "center",
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginBottom: 20,
	},
	item: {
		color: Colors.darkGrey,
	},
});

FilterScreen.propTypes = {};

export default FilterScreen;
