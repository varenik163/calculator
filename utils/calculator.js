export const initialState = {
	currentValue: "",
	operator: null,
	previousValue: null,
	waitingNextOperand: null
};

export const handleNumber = (value, state) => {
	const newCurrentValue = state.currentValue === "0" ? `${value}` : `${state.currentValue}${value}`

	return {
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
			currentValue: previous / current,
			...resetState
		};
	}

	if (operator === "*") {
		return {
			currentValue: previous * current,
			...resetState
		};
	}

	if (operator === "+") {
		return {
			currentValue: previous + current,
			...resetState
		};
	}

	if (operator === "-") {
		return {
			currentValue: previous - current,
			...resetState
		};
	}

	return state;
};

const calculator = (type, value, state) => {
	switch (type) {
		case "number":
			return handleNumber(value, state);
		case "operator":
			return {
				operator: value,
				previousValue: state.currentValue,
				currentValue: "0",
				waitingNextOperand: value
			};
		case "equal":
			return handleEqual(state);
		case "clear":
			return initialState;
		case "posneg":
			return {
				currentValue: `${parseFloat(state.currentValue) * -1}`
			};
		case "percentage":
			return {
				currentValue: `${parseFloat(state.currentValue) * 0.01}`
			};
		default:
			return state;
	}
};

export default calculator;
