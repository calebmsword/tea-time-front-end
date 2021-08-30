import { shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import Navigation from '../Navigation/Navigation.component'
import Main from './Main.component'

let wrapper:ShallowWrapper;

describe('testing Main', () => {
    
    beforeEach( () => {
        wrapper = shallow( <Main /> ); 
    });
    
    it('displays navigation component', () => {
        const navigation:ShallowWrapper = wrapper.find(Navigation);
        expect(navigation.length).toBeGreaterThan(0);
    });

    it('wraps everything in a store provider', () => {
        let children = wrapper.children();
        let wrappedChildren = wrapper.find(Provider).children();
        expect(children.length).toBe(wrappedChildren.length);
    });

});