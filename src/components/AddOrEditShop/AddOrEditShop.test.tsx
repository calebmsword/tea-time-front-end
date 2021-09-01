import { mount, ReactWrapper } from "enzyme";
import { Text, TextInput, TouchableHighlight, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Invokable, TeaShopsState, State, testError } from "../../entities";
import { HasValue } from "./AddOrEditShop.types";
import { testTeaShop } from '../../entities';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

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
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}));

const configureMockStore = configureStore([createSagaMiddleware()]);

const testState = new State( new TeaShopsState([]) );
const testStateAddOrEditLoading = new State( new TeaShopsState([], false, true) );
const testStateDeleteLoading = new State( new TeaShopsState([], false, false, true) );
const testStateAddOrEditError = new State( new TeaShopsState([], false, false, false, null, testError) );
const testStateDeleteError = new State( new TeaShopsState([], false, false, false, null, null, testError) );

const mockStore = configureMockStore(testState);
const mockStoreAddOrEditLoading = configureMockStore(testStateAddOrEditLoading);
const mockStoreDeleteLoading = configureMockStore(testStateDeleteLoading);
const mockStoreAddOrEditError = configureMockStore(testStateAddOrEditError);
const mockStoreDeleteError = configureMockStore(testStateDeleteError);

describe.each([
    'add',
    'edit',
])('testing AddOrEditShop in "%s" mode', (mode) => {
    
    beforeEach( () => {
        wrapper = mount(
            <Provider store={mockStore}>
                <AddOrEditShop 
                    route = {{
                        params: {
                            mode: mode,
                            teaShop: mode === 'edit' ? testTeaShop : undefined,
                        }
                    }}
                />
            </Provider>
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

describe('testing AddOrEditShop when state is loading', () => {

    it('displays loading Modal if tea shops are being added or edited', () => {

        wrapper = mount(
            <Provider store={mockStoreAddOrEditLoading}>
                <AddOrEditShop 
                    route = {{
                        params: {
                            mode: 'edit',
                            teaShop: testTeaShop,
                        }
                    }}
                />
            </Provider>
        );

        const modal = wrapper.find(Modal);
        expect(modal.props().visible).toBeTruthy();
    });

    it.each([
        'add',
        'edit',
    ])('displays loading Modal if tea shops are being deleted in %s mode', (mode) => {
        wrapper = mount(
            <Provider store={mockStoreDeleteLoading}>
                <AddOrEditShop 
                    route = {{
                        params: {
                            mode: '%s',
                            teaShop: mode === 'edit' ? testTeaShop : undefined,
                        }
                    }}
                />
            </Provider>
        );

        const modal = wrapper.find(Modal);
        expect(modal.props().visible).toBeTruthy();
    });

});

describe('testing AddOrEditShop when state has errors', () => {

    it.each([
        ['addOrEdit', 'add'],
        ['addOrEdit', 'edit'],
        ['delete', 'add'],
        ['delete', 'edit'],
    ])('displays error message if %s error occurs in %s mode', (errorCategory, mode) => {
        wrapper = mount(
            <Provider store={errorCategory === 'delete' ? mockStoreDeleteError : mockStoreAddOrEditError}>
                <AddOrEditShop 
                    route = {{
                        params: {
                            mode: mode,
                            teaShop: mode === 'edit' ? testTeaShop : undefined,
                        }
                    }}
                />
            </Provider>
        );
        const errorMessageIsShown = wrapper
            .find(Text)
            .someWhere( (node:ReactWrapper) => 
                node.text().includes(testError.message)
            );

        expect(errorMessageIsShown).toBeTruthy();

    });

});

describe('testing addOrEditShop when mode is not "add" or "edit"', () => {
    
    const mode = 'yeet';

    beforeEach( () => {    
        const props = {
            route: {
                params: {
                    mode: mode
                },
            }
        };
        wrapper = mount(
            <Provider store={mockStore}>
                <AddOrEditShop {...props} />
            </Provider>
        );
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
