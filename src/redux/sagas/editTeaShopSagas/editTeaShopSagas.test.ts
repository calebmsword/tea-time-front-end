import watchEditTeaShopSaga, { editTeaShopSaga, editTeaShopSagaReturn, watchEditTeaShopSagaReturn } from './editTeaShopSagas';
import { editTeaShop, editTeaShopSucceeded, editTeaShopFailed, getAllTeaShops } from '../../actions/teaShopActions';
import { call, put, take } from 'redux-saga/effects';
import { endpoint, testTeaShop, testError } from '../../../entities';
import { TeaShopActionTypes } from '../../types';
import axios from 'axios';

let generator: editTeaShopSagaReturn | watchEditTeaShopSagaReturn;

describe('testing editTeaShopSaga', () => {
    
    beforeEach( () => {
        generator = editTeaShopSaga(testTeaShop);
    })
 
    it('generates the expected objects', () => {
        expect(
            generator.next().value
        )
        .toEqual(
            call(axios.post, `${endpoint}/${testTeaShop.id}`, testTeaShop)
        );

        expect(
            generator.next().value
        )
        .toEqual(
            put(editTeaShopSucceeded())
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
            put(editTeaShopFailed(testError))
        );
    });

});

describe('testing watchEditTeaShopSaga', () => {
    
    beforeEach( () => {
        generator = watchEditTeaShopSaga();
    });

    it('generates the expected objects', () => {
        expect(
            generator.next().value
        )
        .toEqual(
            take(TeaShopActionTypes.EDIT_TEASHOP)
        );

        expect(
            generator.next(editTeaShop(testTeaShop)).value
        )
        .toEqual(
            call(editTeaShopSaga, editTeaShop(testTeaShop).payload)
        );
    });

});