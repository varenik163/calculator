import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { connect } from 'react-redux'
import calculator  from "./utils/calculator";
import ButtonsContainer from "./components/ButtonsContainer";
import { setCalculatorState, clearCalculatorState} from './redux/reducer'

class Caclulator extends React.Component {

	handleTap = (type, value) => {
		const { calculatorState, clearCalculatorState, setCalculatorState } = this.props;
		calculator(type, value, calculatorState, setCalculatorState, clearCalculatorState);
	};

	render() {
		const { currentValue, waitingNextOperand, previousValue} = this.props.calculatorState;
		console.log(this.props.calculatorState)
		const displayedValue = (waitingNextOperand ? previousValue : currentValue).toString().replace('.', ',');
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<Text style={styles.value}>
						{displayedValue}
					</Text>
					<ButtonsContainer handleTap={this.handleTap} waitingNextOperand={waitingNextOperand} />
				</SafeAreaView>
			</View>
		);
	}
}

export default connect(state => ({
	calculatorState: state.calculatorState
}), {
	setCalculatorState,
	clearCalculatorState
})(Caclulator)

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
