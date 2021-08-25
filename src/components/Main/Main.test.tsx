import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import Header from '../Header/Header.component';
import Navigation from '../Navigation/Navigation.component'
import Main from './Main.component'

// let wrapper:ReactWrapper;
let wrapper:ShallowWrapper;

describe('testing Main', () => {
    beforeEach( () => {
        // wrapper = mount( <Main /> );
        wrapper = shallow( <Main /> ); 
    });

    it('mounts without errors', () => {
        expect(wrapper).toBeDefined();
    });
    
    it('displays a header', () => {
        const header:ShallowWrapper = wrapper.find(Header);
        expect(header.length).toBeGreaterThan(0);
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