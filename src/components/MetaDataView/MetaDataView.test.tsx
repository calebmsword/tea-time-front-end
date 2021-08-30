import { shallow, ShallowWrapper } from "enzyme";
import { Text, TextInput } from 'react-native';
import { Invokable } from "../../entities";

import MetaDataView from "./MetaDataView.component";

let wrapper:ShallowWrapper;

const mockSetMetaDataValue = jest.fn();

const props = {
    metadataKey: 'testName',
    metadataValue: '',
    setMetaDataValue: mockSetMetaDataValue,
}

const testInputText = 'yeet';

describe('testing MetaDataView', () => {

    beforeEach( () => {
        wrapper = shallow(<MetaDataView {...props} />)
    });

    it('displays the key of the metadata', () => {
        expect( 
            wrapper
                .find(Text)
                .someWhere( (node:ShallowWrapper) => 
                    node.shallow().text().includes(props.metadataKey)
                )
        )
        .toBeTruthy();
    });

    it('displays the value of the text box', () => {
        const textBox = wrapper.find(TextInput);
        expect(textBox.props().value).toMatch(props.metadataValue);
    });

    it('calls the state-changing callback when you type in the box', () => {
        const textBox = wrapper.find(TextInput);
        (textBox as Invokable).invoke('onChangeText')(testInputText);
        expect(mockSetMetaDataValue).toHaveBeenCalledWith(testInputText);
    });

});