import ReactDOM from 'react-dom';
import App from './containers/AppContainer.js';
import stateHandler from './reducers/reducers.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(stateHandler);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementByID('app')
);

