export const handleNumber = (value, state) => {
	console.log()
	const newCurrentValue = (state.currentValue === "0" && value !== '.') ? `${value}` : `${state.currentValue}${value}`;
	console.log(newCurrentValue)
	return {
		...state,
		currentValue: newCurrentValue,
		waitingNextOperand: null
	};
};

export const handleEqual = state => {
	const { currentValue, previousValue, operator } = state;

	const current = parseFloat(currentValue);
	const previous = parseFloat(previousValue);
	const resetState = {
		operator: null,
		previousValue: null,
		waitingNextOperand: null
	};


	if (operator === "/") {
		return {
			currentValue: +(previous / current).toFixed(10),
			...resetState
		};
	}

	if (operator === "*") {
		return {
			currentValue: +(previous * current).toFixed(10),
			...resetState
		};
	}

	if (operator === "+") {
		return {
			currentValue: +(previous + current).toFixed(10),
			...resetState
		};
	}

	if (operator === "-") {
		return {
			currentValue: +(previous - current).toFixed(10),
			...resetState
		};
	}

	return state;
};

const calculator = (type, value, state, setStateFunc, clearStateFunc) => {
	switch (type) {
		case "number":
			return setStateFunc(handleNumber(value, state));
		case "operator":
			return setStateFunc({
				operator: value,
				previousValue: handleEqual(state).currentValue,
				currentValue: "0",
				waitingNextOperand: value
			});
		case "equal":
			return setStateFunc(handleEqual(state));
		case "clear":
			return clearStateFunc();
		case "posneg":
			return setStateFunc({
				currentValue: `${+(parseFloat(state.currentValue) * -1).toFixed(10)}`
			});
		case "percentage":
			return setStateFunc({
				currentValue: `${+(parseFloat(state.currentValue) * 0.01).toFixed(10)}`
			});
		default:
			return setStateFunc(state);
	}
};

export default calculator;
