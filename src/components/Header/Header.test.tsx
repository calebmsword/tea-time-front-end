import { shallow, ShallowWrapper } from "enzyme";
import { Image } from 'react-native'
import Header from './Header.component';

let wrapper:ShallowWrapper;

describe('testing Header', () => {

    beforeEach( () => {
        wrapper = shallow( <Header /> );
    });

    it('displays an image', () => {
        const imgSrc =  wrapper.find(Image).props().source
        expect(imgSrc).toBe(require('../../../assets/tea-time-logo-cropped.jpg'));
    });
});