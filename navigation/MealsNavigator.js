import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../styles/Colors";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screens/FilterScreen";

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoryScreen,
		CategoryMeals: {
			screen: CategoryMealScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.white,
			},
			headerTitleStyle: {
				fontSize: 14,
			},
			headerBackTitleStyle: {
				fontSize: 12,
			},
		},
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoriteScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.white,
			},
		},
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />;
				},
			},
		},
		Favorite: {
			screen: FavNavigator,
			navigationOptions: {
				tabBarLabel: "좋은거",
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
				},
			},
		},
	},
	{
		tabBarOptions: {
			labelStyle: {
				fontSize: 10,
			},
			activeTintColor: Colors.secondary,
		},
	}
);

const FilterNavigator = createStackNavigator(
	{
		Filters: FilterScreen,
	},
	{
		// navigationOptions: {
		// 	drawerLabel: "Filters",
		// },
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.white,
			},
		},
	}
);

export const MainNavigator = createDrawerNavigator(
	{
		MealsFavs: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: "Meals",
			},
		},
		Filters: FilterNavigator,
	},
	{
		contentOptions: {
			activeTintColor: Colors.secondary,
			labelStyle: {
				fontSize: 14,
			},
		},
	}
);

export default createAppContainer(MainNavigator);
