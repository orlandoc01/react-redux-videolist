import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';
import stateHandler from './reducers/reducers.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(stateHandler);

ReactDom.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementByID('app')
);

