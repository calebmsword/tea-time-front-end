import React from 'react';
import { View, Text, Image } from 'react-native';

const Header : React.FC = () => {
    return (
        
        <View>
            <Image source={require('../../../assets/tea-time-logo-cropped.jpg')} />
        </View>
    );
}

export default Header;