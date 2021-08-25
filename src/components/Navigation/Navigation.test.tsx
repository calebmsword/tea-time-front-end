import { shallow, ShallowWrapper } from "enzyme";
import { NavigationContainer } from '@react-navigation/native';

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

    
});