import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import regeneratorRuntime from 'regenerator-runtime'

const store = createStore(
	combineReducers({ ...reducers, }),
	compose(
		applyMiddleware(...[])
	)
);

export { store };
