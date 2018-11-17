import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange = (text) => {
		this.props.emailChanged(text);
	};
	onPasswordChange = (text) => {
		this.props.passwordChanged(text);
	};
	onUserLogin = () => {
		const { email, password } = this.props;
		this.props.loginUser({ email, password })
	}
	renderError = () => {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text></View>
			)
		}
	}
	render() {

		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange}
						value={this.props.email} />
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange}
						value={this.props.password} />
				</CardSection>
				{this.renderError()}
				<CardSection>
					<Button onPress={this.onUserLogin}>Login</Button>
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		color: 'red',
		alignSelf: 'center',
		fontSize: 20
	}
}
const mapStateToProps = (state) => {
	const { email, password, error } = state.auth;
	return {
		email,
		password,
		error
	}
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
