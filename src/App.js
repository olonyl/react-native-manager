import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';

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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
