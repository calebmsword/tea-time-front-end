import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchShops from '../SearchShops/SearchShops.component';
import ShopView from '../ShopView/ShopView.component';
import AddShop from '../AddShop/AddShop.component';

const Stack = createStackNavigator();
const Navigation:React.FC = () => {
    
    const searchBarScreenProps = {
        name: 'search',
        component: SearchShops,
        // options: {
        //     gestureDirection: 'horizontal',
        // },
    };

    const shopViewScreenProps = {
        name: 'shop',
        component: ShopView,
        // options: {
        //     gestureDirection: 'horizontal',
        // },
    };

    const addShopScreenProps = {
        name: 'add',
        component: AddShop,
        // options: {
        //     gestureDirection: 'horizontal',
        // },
    };
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen {...searchBarScreenProps} />
                <Stack.Screen {...shopViewScreenProps} />
                <Stack.Screen {...addShopScreenProps} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;