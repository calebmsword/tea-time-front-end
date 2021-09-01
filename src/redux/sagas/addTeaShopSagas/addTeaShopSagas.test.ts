import watchAddTeaShopSaga, { addTeaShopSaga, addTeaShopSagaReturnType, watchAddTeaShopSagaReturnType } from "./addTeaShopSagas";
import { addTeaShop, addTeaShopSucceeded, addTeaShopFailed, getAllTeaShops } from "../../actions/teaShopActions";
import { call, put, take } from 'redux-saga/effects';
import { endpoint, testTeaShopToAdd, testError } from '../../../entities';
import { TeaShopActionTypes } from "../../types";
import axios from 'axios';

let generator:addTeaShopSagaReturnType | watchAddTeaShopSagaReturnType;

describe('testing addTeaShopSaga', () => {
    
    beforeEach( () => {
        generator = addTeaShopSaga(testTeaShopToAdd);
    }); 

    it('generates the expected objects', () => {
        expect( 
            generator.next().value
        )
        .toEqual(
            call(axios.post, endpoint, testTeaShopToAdd)
        );

        expect( 
            generator.next().value
        )
        .toEqual(
            put(addTeaShopSucceeded())
        );

        expect(
            generator.next().value
        )
        .toEqual(
            put(getAllTeaShops())
        );

    });

    it('handles errors properly', () => {
        generator.next();
        expect(
            generator.throw(testError).value
        )
        .toEqual(
            put(addTeaShopFailed(testError))
        );
    });

});

describe('testing watchAddTeaShopSaga', () => {
    
    beforeEach( () => {
        generator = watchAddTeaShopSaga();
    }); 

    it('properly watches for the saga', () => {
        expect( 
            generator.next().value
        )
        .toMatchObject(
            take(TeaShopActionTypes.ADD_TEASHOP)
        );

        expect(
            generator.next(addTeaShop(testTeaShopToAdd)).value
        )
        .toMatchObject(
            call(addTeaShopSaga, addTeaShop(testTeaShopToAdd).payload)
        );

    });

});