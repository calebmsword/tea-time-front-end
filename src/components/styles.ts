import { StyleSheet } from 'react-native';

export const colors = {
	orange: '#DD7564',
	blue: '#1FA5A6',
	lightBlue: '#B2DEDD',
	beige: '#F0EDE6',
};					

// <View> Styles
export const screenStyles = StyleSheet.create({
	// Wrap your top-level in a safeareaview with this style
	safeAreaView: {
		backgroundColor: colors.beige,
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
