import React from "react";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { combineReducers, createStore } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

export default function App() {
	enableScreens();

	const rootReducer = combineReducers({
		meals: mealsReducer,
	});

	const store = createStore(rootReducer);

	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}
