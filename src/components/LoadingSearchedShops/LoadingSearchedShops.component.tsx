import React from 'react';
import { View, Text } from 'react-native';
import { props } from './LoadingSearchedShops.types';

const LoadingSearchedShops : React.FC<props> = ( {loading} ) => {
    return ( 
        <View>
            {loading ? (
                <Text>Loading tea shops...</Text>
            ) : (
                <></>
            )}
            
        </View>
    )
} 

export default LoadingSearchedShops;