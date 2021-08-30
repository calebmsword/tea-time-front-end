import watchAddTeaShopSaga, { addTeaShopSaga, addTeaShopSagaReturnType, watchAddTeaShopSagaReturnType } from "./addTeaShopSagas";
import { addTeaShopSucceeded, addTeaShopFailed } from "../../actions/teaShopActions";
import { call, put, all, takeLatest } from 'redux-saga/effects';
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
        generator = watchAddTeaShopSaga(testTeaShopToAdd);
    }); 

    it('properly watches for the saga', () => {
        expect( 
            generator.next().value
        )
        .toMatchObject(
            all([
                takeLatest(TeaShopActionTypes.ADD_TEASHOP, addTeaShopSaga, testTeaShopToAdd)
            ])
        );
    });

});