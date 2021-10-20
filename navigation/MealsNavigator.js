import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../styles/Colors";

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
				backgroundColor: Colors.primary,
			},
			headerTintColor: Colors.white,
		},
	}
);

export default createAppContainer(MealsNavigator);
