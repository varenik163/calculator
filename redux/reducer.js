const initialState = {
	currentValue: "",
	operator: null,
	previousValue: null,
	waitingNextOperand: null
};

const SET_CALCULATOR_STATE = 'SET_CALCULATOR_STATE';
export const setCalculatorState = (state) => ({
	type: SET_CALCULATOR_STATE,
	payload: state
});

const CLEAR_CALCULATOR_STATE = 'CLEAR_CALCULATOR_STATE';
export const clearCalculatorState = () => ({
	type: CLEAR_CALCULATOR_STATE
});

const calculatorStateReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_CALCULATOR_STATE:
			return payload;
		case CLEAR_CALCULATOR_STATE:
			return initialState;
		default:
			return state
	}
};

export default {
	calculatorState: calculatorStateReducer
}

