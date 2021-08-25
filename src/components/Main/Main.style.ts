import { StyleSheet } from 'react-native';
import colors from '../colors';

const MainStyles = StyleSheet.create({
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

export default MainStyles;