import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureDirection } from '@react-navigation/stack/lib/typescript/src/types';
import SearchShops from '../SearchShops/SearchShops.component';
import AddOrEditShop from '../AddOrEditShop/AddOrEditShop.component';

const Stack = createStackNavigator();
const Navigation:React.FC = () => {
    
    const searchBarScreenProps = {
        name: 'search',
        component: SearchShops,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };

    const addShopScreenProps = {
        name: 'shop',
        component: AddOrEditShop,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };

    const updateShopScreenProps = {
        name: 'add',
        component: AddOrEditShop,
        options: {
            gestureDirection: 'horizontal' as GestureDirection,
        },
    };
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='search'>
                <Stack.Screen {...searchBarScreenProps} />
                <Stack.Screen {...addShopScreenProps} />
                <Stack.Screen {...updateShopScreenProps} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;