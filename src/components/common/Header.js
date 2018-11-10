//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
	textStyle: {
		fontSize: 30
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		elevation: 5,
		position: 'relative'
	}
};
//Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};
//Make the component available to other parts of the apps
export { Header };
