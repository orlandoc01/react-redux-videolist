import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import stateHandler from './reducers/reducers.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(stateHandler);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

