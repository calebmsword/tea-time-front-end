import { shallow, ShallowWrapper } from "enzyme";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SearchShops from '../SearchShops/SearchShops.component';
import AddShop from '../AddShop/AddShop.component';
import ShopView from '../ShopView/ShopView.component';
import Navigation from './Navigation.component';

let wrapper:ShallowWrapper;

describe('testing Navigation', () => {
    beforeEach( () => {
        wrapper = shallow( <Navigation /> );
    });

    it('is rendered successfully', () => {
        expect(wrapper).toBeDefined();
    });

    it('wraps all children in a NavigationContainer', () => {
        const children = wrapper.children();
        const wrappedChildren = wrapper.find(NavigationContainer).children();
        expect(children.length).toBe(wrappedChildren.length);
    });
    
    interface ScreenProps {
        component: React.FC,
    }

    const arr = [SearchShops.displayName, AddShop.displayName, ShopView.displayName];

    it.each(arr)('has a screen for "%s"', (s) => {
        const screens = wrapper.children().children();
        const screenExists = screens.someWhere( (node:ShallowWrapper) =>
            (node.props() as ScreenProps).component.displayName === s
        );
        expect(screenExists).toBeTruthy(); 
    });
});
