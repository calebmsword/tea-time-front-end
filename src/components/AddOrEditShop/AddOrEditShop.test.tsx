import { mount, ReactWrapper } from "enzyme";
import { TextInput, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Invokable } from "../../entities";
import { HasValue } from "./AddOrEditShop.types";
import { testTeaShop } from '../../entities';

import AddOrEditShop from './AddOrEditShop.component';

let wrapper:ReactWrapper;

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
        goBack: mockGoBack,
    }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

describe.each([
    'add',
    'edit',
])('testing AddOrEditShop in "%s" mode', (mode) => {
    
    beforeEach( () => {
        wrapper = mount(
            <AddOrEditShop 
                route = {{
                    params: {
                        mode: mode,
                        teaShop: mode === 'edit' ? testTeaShop : undefined,
                    }
                }}
            />
        );
    });

    afterEach( () => {
        mockNavigate.mockReset();
        mockGoBack.mockReset();
        mockDispatch.mockReset();
    });

    it('displays a back button which sends user to previous screen when pressed', () => {
        const backBtn = wrapper.find(MaterialCommunityIcons);
        (backBtn as Invokable).invoke('onPress')();
        expect(mockNavigate).toHaveBeenCalled();
    });

    it('displays button for updating shop that dispatches to store when pressed', () => {
        let updateBtn = wrapper
            .find(TouchableHighlight)
            .findWhere( (node:ReactWrapper) => 
                   node.text().toLowerCase().includes('add shop')
                || node.text().toLowerCase().includes('edit shop')
            )
            .findWhere( (node:ReactWrapper) => 
                node.props().hasOwnProperty('onPress')
            );
        updateBtn = updateBtn.length ? updateBtn.last() : updateBtn;
        (updateBtn as Invokable).invoke('onPress')();
        expect(mockDispatch).toHaveBeenCalled();
    });

    const arr = [
        [ mode === 'edit' ? testTeaShop.name : '' ],
        [ mode === 'edit' ? testTeaShop.address.street : '' ],
        [ mode === 'edit' ? testTeaShop.address.city : '' ],
        [ mode === 'edit' ? testTeaShop.address.state : '' ],
        [ mode === 'edit' ? testTeaShop.address.areaCode : '' ],
    ];
    it.each(arr)('by default, displays "%s" in a TextInput somewhere', (metadata) => {
        const containsMetadataAsPlaceholder:boolean = wrapper
            .find(TextInput)
            .someWhere( (node:ReactWrapper) => 
                (node.props() as HasValue).value.includes(metadata)
            );
        expect(containsMetadataAsPlaceholder).toBeTruthy();
    });

    it('contains a delete button that dispatches to store when pressed ONLY if we are in edit mode', () => {
        let deleteBtn = wrapper
            .find(TouchableHighlight)
            .findWhere( (node:ReactWrapper) => 
                node.text().toLowerCase().includes('delete')
            )
            .findWhere( (node:ReactWrapper) => 
                node.props().hasOwnProperty('onPress')
            );
        deleteBtn = deleteBtn.length > 1 ? deleteBtn.last() : deleteBtn;

        if (deleteBtn.length) {
            expect(mode).toMatch('edit');
            (deleteBtn as Invokable).invoke('onPress')();
            expect(mockDispatch).toHaveBeenCalled();
        } else {
            expect(mode).toBe('add');
        }
    });

});

describe('testing when mode is not "add" or "edit"', () => {
    
    const mode = 'yeet';
    beforeEach( () => {
        wrapper = mount(<AddOrEditShop route={ { params: {mode: mode} } } />);
    });

    afterEach( () => {
        mockNavigate.mockReset();
        mockGoBack.mockReset();
        mockDispatch.mockReset();
    });

    it('pressing add/edit button does not dispatch to store', () => {
        let updateBtn = wrapper
            .find(TouchableHighlight)
            .findWhere( (node:ReactWrapper) => 
                node.text().toLowerCase().includes(`${mode} shop`)
            )
            .findWhere( (node:ReactWrapper) => 
                node.props().hasOwnProperty('onPress')
            );
        updateBtn = updateBtn.length ? updateBtn.last() : updateBtn;
        (updateBtn as Invokable).invoke('onPress')();
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });

});