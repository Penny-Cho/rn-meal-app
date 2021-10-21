import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/elements/HeaderBtn";
import { MainNavigator } from "../navigation/MealsNavigator";

const CategoryScreen = ({ navigation }) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: itemData.item.id,
						},
					})
				}
				style={styles.gridItem}
			>
				<View style={{ ...styles.itemBox, backgroundColor: itemData.item.color }}>
					<Text style={styles.text} numberOfLines={2}>
						{itemData.item.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />;
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		marginTop: "5%",
		marginHorizontal: "3%",
		height: 80,
	},
	itemBox: {
		flex: 1,
		borderRadius: 6,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: "10%",
	},
	text: {
		color: Colors.white,
		fontSize: 14,
		fontWeight: "bold",
	},
});

CategoryScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Meals Category",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderBtn}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						console.log("what");
						navData.navigation.toggleDrawer(MainNavigator);
					}}
				/>
			</HeaderButtons>
		),
	};
};

CategoryScreen.propTypes = {
	navigation: PropTypes.object,
};

export default CategoryScreen;
