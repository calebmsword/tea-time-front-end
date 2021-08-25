import { mount, ReactWrapper } from 'enzyme';

import Main from './Main.component'

let wrapper:ReactWrapper;

describe('testing Main', () => {
    beforeEach( () => {
        wrapper = mount( <Main /> );
    });

    it('mounts without errors', () => {
        expect(wrapper).toBeDefined();
    });

    import Header from '../Header';
    it('displays a header', () => {
        const header:ReactWrapper = wrapper.find(Header);
        expect(header.length).toBeGreaterThan(0);
    });

    it('by default, displays a search bar', () => {
        const searchBar:ReactWrapper = wrapper.find( {testID: 'search-bar'});
        expect(searchBar.length).toBeGreaterThan(0);
    });
});