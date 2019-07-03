import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState }  from "./utils/calculator";
import ButtonsContainer from "./components/ButtonsContainer";

export default class App extends React.Component {
	state = initialState;

	handleTap = (type, value) => {
		this.setState(state => calculator(type, value, state));
	};

	render() {
		const { currentValue, waitingNextOperand, previousValue} = this.state;
		console.log(this.state);

		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<Text style={styles.value}>
						{waitingNextOperand ? previousValue : currentValue}
					</Text>
					<ButtonsContainer handleTap={this.handleTap} waitingNextOperand={waitingNextOperand} />
				</SafeAreaView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#202020",
		justifyContent: "flex-end"
	},
	value: {
		color: "#fff",
		fontSize: 40,
		textAlign: "right",
		marginRight: 20,
		marginBottom: 10
	}
});
