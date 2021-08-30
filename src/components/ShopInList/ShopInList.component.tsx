import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Props from './ShopInList.types';
import styles from './ShopInList.styles';

const ShopInList : React.FC<Props> = ( {teaShop} ) => {
    const navigation = useNavigation<any>();

    return (
            <TouchableHighlight
                style={styles.container} 
                onPress={() => navigation.navigate('shop', { 
                    mode: 'edit', 
                    teaShop,
                })}
            >
                <Text>{teaShop.name}</Text>
            </TouchableHighlight>
    );
}

export default ShopInList;