import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { View } from 'react-native';
class LoginForm extends Component {
	onEmailChange = (text) => {
		this.props.emailChanged(text);
	};
	render() {
		return (
			<Card>
				<CardSection>
					<Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange} />
				</CardSection>
				<CardSection>
					<Input secureTextEntry label="Password" placeholder="password" />
				</CardSection>
				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

export default connect()(LoginForm);
