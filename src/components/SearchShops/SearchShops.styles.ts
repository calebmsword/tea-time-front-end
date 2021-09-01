import { white } from 'chalk';
import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        fontSize: 20,
        borderRadius: 15,
        borderColor: '#000000',
        borderWidth: 2,
        margin: 20,
        flex: 1
    },
    addShopBtn: {
        backgroundColor: colors.blue,
        padding: 20,
        borderRadius: 15,
        borderColor: '#000000',
        borderWidth: 2,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
    },
    addShopBtnText: {
        color: '#FFFFFF',
    },
});

export default styles;