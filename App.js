import React from "react";
import { Provider } from 'react-redux'
import { store }  from './redux/store'
import Calculator from './Calculator'

export default () => (
	<Provider store={store}>
		<Calculator />
	</Provider>
)
