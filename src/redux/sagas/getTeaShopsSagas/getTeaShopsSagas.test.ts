import watchGetTeaShopsSaga, { getAllTeaShopsSaga, getAllTeaShopsSagaReturnType, watchTeaShopsSagaReturnType } from "./getTeaShopsSagas";
import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getAllTeaShopsFailed, getAllTeaShopsSucceeded } from "../../actions/teaShopActions";
import { endpoint, mockGetAllShopsFromAPI, testError } from '../../../entities';
import axios from 'axios';
import { TeaShopActionTypes } from '../../types';

let generator:getAllTeaShopsSagaReturnType | watchTeaShopsSagaReturnType;

describe('testing getTeaShopsSagas', () => {
    
    beforeEach( () => {
        generator = getAllTeaShopsSaga();
    });

    it('generates the expected objects', () => {
        expect(generator.next().value).toMatchObject(call(axios.get, endpoint));

        // gen.next() takes argument to set value returned from previous yield
        expect(
            generator.next(mockGetAllShopsFromAPI as AxiosResponse).value
        )
        .toMatchObject( 
            put(getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops))
        );
    });

    it('handles error in expected manner', () => {
        generator.next();
        
        /*
        If you comment out the generator.next(), this test will fail.
        To see why generator.next() is necessary, see the github issue
            https://github.com/jfairbank/redux-saga-test-plan/issues/147
        and it's solution
            https://github.com/jfairbank/redux-saga-test-plan/issues/147#issuecomment-345824401.
        
        In short, we need to make sure that we are in the try-catch block 
        created in the saga or Jest will think an error occurred and fail the 
        test once we throw the generator.
        */

        expect(
            generator.throw(testError).value
        )
        .toMatchObject(
            put(getAllTeaShopsFailed(testError))
        );
    });

});

describe('testing watchGetTeaShopsSaga', () => {
    beforeEach( () => {
        generator = watchGetTeaShopsSaga();
    });

    it('properly watches for the saga', () => {
        expect( 
            generator.next().value
        )
        .toMatchObject(
            all([
                takeLatest(TeaShopActionTypes.GET_ALL_TEASHOPS, getAllTeaShopsSaga)
            ])
        );
    });

});