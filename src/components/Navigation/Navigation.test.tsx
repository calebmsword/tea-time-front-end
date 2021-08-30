import { shallow, ShallowWrapper } from "enzyme";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IScreenProps } from './Navigation.types';

import Navigation from './Navigation.component';

let wrapper:ShallowWrapper;

describe('testing Navigation', () => {
    beforeEach( () => {
        wrapper = shallow( <Navigation /> );
    });
    
    it('wraps all children in a NavigationContainer', () => {
        const children = wrapper.children();
        const wrappedChildren = wrapper.find(NavigationContainer).children();
        expect(children.length).toBe(wrappedChildren.length);
    });
    
    const arr = ['search', 'shop', 'add'];
    it.each(arr)('has a screen for "%s"', (s) => {
        const screens = wrapper.children().children();
        const screenExists = screens.someWhere( (node:ShallowWrapper) =>
            (node.props() as IScreenProps).name === s
        );
        expect(screenExists).toBeTruthy(); 
    });
});
