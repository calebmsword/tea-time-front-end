import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Props from './ShopInList.types'

const ShopInList : React.FC<Props> = ( {teaShop} ) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableHighlight 
            onPress={() => navigation.navigate('shop', { teaShop })}
        >
            <Text>{teaShop.name}</Text>
        </TouchableHighlight>
    );
}

export default ShopInList;