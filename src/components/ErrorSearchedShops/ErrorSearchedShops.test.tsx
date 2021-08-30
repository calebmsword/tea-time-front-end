import { shallow, ShallowWrapper } from "enzyme";
import { Text } from 'react-native';
import { testError } from '../../entities';

import ErrorSearchedShops from './ErrorSearchedShops.component';

let wrapper:ShallowWrapper;

describe('testing ErrorSearchedShops', () => {

    beforeEach( () => {
        wrapper = shallow( <ErrorSearchedShops error={testError}/>);
    });

    it('displays the error message as text somewhere', () => {
        const errMessageDisplayed = wrapper
            .find(Text)
            .someWhere( (node:ShallowWrapper ) => 
                node.shallow().text().includes(testError.message)
            );
        expect(errMessageDisplayed).toBeTruthy();
    });
});