import React from 'react';
import { View, Image } from 'react-native';
import { colors } from '../styles';

const Header : React.FC = () => {
    return (
        
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 30, backgroundColor: colors.beige}}>
            <Image style={{height: 300, width: 300}} resizeMode={'contain'} source={require('../../../assets/tea-time-logo-cropped.jpg')} />
        </View>
    );
}

export default Header;