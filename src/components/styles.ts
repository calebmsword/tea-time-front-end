import { StyleSheet } from 'react-native';

export const colors = {
	screenBg: 'rgb(250,250,250)',
	white: 'rgb(255,255,255)',
	lightGray: 'rgb(185,185,186)',
	darkGray: 'rgb(72,76,86)',
	orange: 'rgb(242,105,38)',
	yellow: 'rgb(253,181,21)',
	blue: 'rgb(115,165,194)',
};					

// <View> Styles
export const screenStyles = StyleSheet.create({
	// Wrap your top-level in a safeareaview with this style
	safeAreaView: {
		backgroundColor: colors.screenBg,
		flex: 1,
	},
  
	// The view under your safeareaview, ideally a scrollview for screens without a flatlist
	mainView: {
		flex: 1,
		padding: 25,
	},
  
	// Since screen titles have a button next to it,
	// we need to wrap both the text and button in a view with this style
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

// <Text> Styles
export const textStyles = StyleSheet.create({
	// Main title, as in the screen's title
	heading: {
	  fontSize: 24,
	  color: colors.darkGray,
	  fontFamily: 'FuturaBold',
	},
  
	// Any additional text that you want as a header under the main screen's title
	subHeading: {
	  fontSize: 20,
	  fontFamily: 'FuturaBold',
	  color: colors.darkGray,
	},
  
	// Any normal text
	regular: {
	  color: colors.darkGray,
	  fontFamily: 'FuturaBook',
	  fontWeight: '700',
	},
  
	// Any normal text but bold as well as font-family
	regularBold: {
	  color: colors.darkGray,
	  fontFamily: 'FuturaBold',
	},
  });

// Input Styles
export const inputStyles = StyleSheet.create({
	pickerContainer: {
		backgroundColor: colors.white,
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		margin: 5,
	},
  
	textInput: {
		backgroundColor: colors.white,
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		margin: 5,
		padding: 10,
		},
  
	inputLabelText: {
		marginTop: 5,
		paddingLeft: 5,
	},
  });

// Button Styles
export const buttonStyles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		height: 35,
		width: 125,
		padding: 10,
		backgroundColor: colors.orange,
		borderRadius: 50,
		marginLeft: 10,
	},
  
	buttonCompactContainer: {
		justifyContent: 'center',
		height: 35,
		width: 100,
		padding: 10,
		backgroundColor: colors.orange,
		borderRadius: 50,
		marginLeft: 10,
	},
  
	buttonCompactOutlineContainer: {
		justifyContent: 'center',
		height: 35,
		width: 100,
		padding: 10,
		borderWidth: 2,
		borderColor: colors.orange,
		borderRadius: 50,
		marginLeft: 10,
	},
  
	buttonText: {
		color: colors.white,
		alignSelf: 'center',
		fontFamily: 'FuturaBook',
		fontWeight: '700',
	},
  
	buttonSecondaryText: {
		color: colors.orange,
		alignSelf: 'center',
		fontFamily: 'FuturaBook',
		fontWeight: '700',
	},
  
	buttonDisabled: {
		justifyContent: 'center',
		height: 35,
		width: 125,
		padding: 10,
		backgroundColor: colors.white,
		borderRadius: 50,
		marginLeft: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
  
	buttonDisabledText: {
		color: colors.darkGray,
		alignSelf: 'center',
		fontFamily: 'FuturaBook',
		fontWeight: '700',
	},
});
