import { mount, ReactWrapper } from "enzyme";
import { Text, TextInput, FlatList } from 'react-native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { State, TeaShopsState, TeaShop, Address, testTeaShop } from '../../entities';
import { Invokable } from '../../entities';

import { byHavingPropertyWhoseValueIncludes } from "./SearchShops.helpers";
import Header from '../Header/Header.component';
import SearchShops from './SearchShops.component';

let wrapper:ReactWrapper;

const addressA = new Address('streetA', 'cityA', 'stateA', 'areaCodeA');
const addressB = new Address('streetB', 'cityB', 'stateB', 'areaCodeB');
const teaShopA = new TeaShop('0', 'Tea Shop A', addressA);
const teaShopB = new TeaShop('1', 'Tea Shop B', addressB);

const testState = new State( new TeaShopsState([teaShopA, teaShopB]) );
const testStateLoading = new State( new TeaShopsState([teaShopA, teaShopB], true));
const testStateError = new State( new TeaShopsState([teaShopA, teaShopB], false, new Error('message')));

const mockStore = configureStore([createSagaMiddleware()])(testState);
const mockStoreLoading = configureStore([createSagaMiddleware()])(testStateLoading);
const mockStoreError= configureStore([createSagaMiddleware()])(testStateError);

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('testing SearchShops', () => {
    
    beforeEach( () => {
        wrapper = mount( 
            <Provider store={mockStore} >
                <SearchShops />
            </Provider>
        );
    });

    afterEach( () => {
        mockNavigate.mockReset();
    })
    
    it('displays a header', () => {
        expect(wrapper.find(Header).find.length).toBeGreaterThan(0);
    })

    it('has a text input box', () => {
        expect(wrapper.find(TextInput).length).toBeGreaterThan(0);
    });

    const arr = [ 
        [teaShopA.name, teaShopA.name],
        [teaShopB.name, teaShopB.name],
        [teaShopA.name.toUpperCase(), teaShopA.name],
        [teaShopA.name.substring(4, teaShopA.name.length), teaShopA.name],
        [teaShopA.address.streetName, teaShopA.name],
        [teaShopA.address.city, teaShopA.name],
        [teaShopA.address.state, teaShopA.name],
        [teaShopA.address.areaCode, teaShopA.name],
        [teaShopB.address.streetName, teaShopB.name],
        [teaShopB.address.city, teaShopB.name],
        [teaShopB.address.state, teaShopB.name],
        [teaShopB.address.areaCode, teaShopB.name],
    ];
    test.each(arr)('if we type "%s" in the search bar, component displays "%s"', (textInSearchBar, expectedTeaShopName) => {
        
        const searchBar = wrapper.find(TextInput);
        (searchBar as Invokable).invoke('onChangeText')(textInSearchBar);

        const expectedNameIsDisplayed:boolean = wrapper
            .find(Text)
            .someWhere( (node:ReactWrapper) => 
                node.text().includes(expectedTeaShopName)
            );

        expect(expectedNameIsDisplayed).toBeTruthy();

    });

    it('FlatList displays nothing if we type something irrelevant in the search bar', () => {
        const searchBar = wrapper.find(TextInput);
        (searchBar as Invokable).invoke('onChangeText')('why r u gay? who says im gay? u r gay');

        expect(
            mount(
                wrapper.find(FlatList).getElement()
            )
            .props().data.length
        ).toBe(0);
    });

    it('FlatList displays nothing if we have only whitespace in search bar', () => {
        const searchBar = wrapper.find(TextInput);
        (searchBar as Invokable).invoke('onChangeText')('  \n \n \t    ');

        expect(
            mount(
                wrapper.find(FlatList).getElement()
            )
            .props().data.length
        ).toBe(0);
    })

    it('does not contain anything in FlatList if tea shops are loading', () => {
        wrapper = mount( 
            <Provider store={mockStoreLoading}>
                <SearchShops />
            </Provider>
        );
        expect(
            mount(
                wrapper.find(FlatList).getElement()
            )
            .props().data.length
        ).toBe(0);
    });

    it('does not display FlatList if we had an error', () => {
        wrapper = mount( 
            <Provider store={mockStoreError}>
                <SearchShops />
            </Provider>
        );
        expect(wrapper.find(FlatList).length).toBe(0);
    });

    it('has an add new shop button that navigates to new screen when pressed', () => {
        const addShopBtns = wrapper
            .find({testID: 'add-shop-btn'})
            .findWhere( (node:ReactWrapper) => 
                node.props().hasOwnProperty('onPress') 
            );
        const addShopBtn = addShopBtns.length ? addShopBtns.last() : addShopBtns;
        (addShopBtn as Invokable).invoke('onPress')();
        expect(mockNavigate).toHaveBeenCalled();
    });

});

describe('testing SeachShops.helpers', () => {

    it('returns true if the tea shop has a property with the name given', () => {
        expect(
            byHavingPropertyWhoseValueIncludes(testTeaShop.name)(testTeaShop)
        )
        .toBeTruthy();
    });

    it('if tea shop has id of numerical 10 but parameter is the string "10", we still return false instead of true', () => {
        expect(
            byHavingPropertyWhoseValueIncludes('10')({
                name: 't',
                id: 10 as unknown as string,
                address: {
                    streetName: 'hm',
                    city: 'hm',
                    state: 'hm',
                    areaCode: 'hm',
                },
            })
        )
        .toBeFalsy();
    });

});