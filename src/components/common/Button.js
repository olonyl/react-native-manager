import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle, containerStyle } = styles;
	return (
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		flex: 1
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	containerStyle: {
		padding: 5,
		flexDirection: 'row'
	}
};

export { Button };
