import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureDirection } from '@react-navigation/stack/lib/typescript/src/types';
import SearchShops from '../SearchShops/SearchShops.component';
import ShopView from '../ShopView/ShopView.component';
import AddShop from '../AddShop/AddShop.component';

const Stack = createStackNavigator();
const Navigation:React.FC = () => {
    
    const searchBarScreenProps = {
        name: 'search',
        component: SearchShops,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };

    const shopViewScreenProps = {
        name: 'shop',
        component: ShopView,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };

    const addShopScreenProps = {
        name: 'add',
        component: AddShop,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='search'>
                <Stack.Screen {...searchBarScreenProps} />
                <Stack.Screen {...shopViewScreenProps} />
                <Stack.Screen {...addShopScreenProps} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;