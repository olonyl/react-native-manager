import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router'
class App extends Component {
	componentWillMount() {
		var config = {
			apiKey: 'AIzaSyDekztxp98diGCT8sNcHBjwGeiKVPeVCLE',
			authDomain: 'manager-ad1b5.firebaseapp.com',
			databaseURL: 'https://manager-ad1b5.firebaseio.com',
			projectId: 'manager-ad1b5',
			storageBucket: 'manager-ad1b5.appspot.com',
			messagingSenderId: '421894694689'
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

export default App;
