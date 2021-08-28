import { shallow, ShallowWrapper } from "enzyme";
import { TextInput, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Invokable } from "../../entities";
import { HasPlaceholder } from "./AddOrEditShop.types";
import { testTeaShop } from '../../entities';

import AddOrEditShop from './AddOrEditShop.component';

let wrapper:ShallowWrapper;

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        goBack: mockGoBack,
    }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

describe('testing AddOrEditShop in "edit" mode', () => {
    beforeEach( () => {
        wrapper = shallow(<AddOrEditShop mode='edit' teaShop={testTeaShop}/>);
    });

    it('displays a back button which sends user to previous screen when pressed', () => {
        const backBtn = wrapper.find(MaterialCommunityIcons);
        (backBtn as Invokable).invoke('onPress')();
        expect(mockGoBack).toHaveBeenCalled();
    });

    it('displays button for updating shop that dispatches to store and navigates back to home screen when pressed', () => {
        const updateBtn = wrapper
            .find(Text)
            .findWhere( (node:ShallowWrapper) => 
                node.shallow().text().includes('update')
            ) as Invokable;
        updateBtn.invoke('onPress')();
        expect(mockDispatch).toHaveBeenCalled();
        expect(mockGoBack).toHaveBeenCalled();
    });

    const arr = [
        [testTeaShop.name],
        [testTeaShop.address.streetName],
        [testTeaShop.address.city],
        [testTeaShop.address.state],
        [testTeaShop.address.areaCode],
    ];
    it.each(arr)('Displays the Tea Shop metadata (specifically, %s) as placeholder in a TextInput somewhere', (metadata) => {
        const containsMetadataAsPlaceholder:boolean = wrapper
            .find(TextInput)
            .someWhere( (node:ShallowWrapper) => 
                (node.props() as HasPlaceholder).placeholder.includes(metadata)
            );
        expect(containsMetadataAsPlaceholder).toBeTruthy();
    });

    it('contains a delete button that dispatches to store when pressed', () => {
        const deleteBtn = wrapper
            .find(Text)
            .findWhere( (node:ShallowWrapper) => 
                node.shallow().text().toLowerCase().includes('delete')
            ) as Invokable;
        deleteBtn.invoke('onPress')();
        expect(mockDispatch).toHaveBeenCalled();
    });
});