import watchTeaShopsSaga, { getAllTeaShopsSaga } from "./getTeaShopsSagas";
import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getAllTeaShopsFailed, getAllTeaShopsSucceeded } from "../../actions/teaShopActions";
import { endpoint, mockGetAllShopsFromAPI } from '../../../entities';
import axios from 'axios';
import { TeaShopActionTypes } from '../../types';

describe('testing getTeaShopsSagas', () => {
    
    it('generates the expected objects', () => {
        const gen = getAllTeaShopsSaga();
        expect(gen.next().value).toMatchObject(call(axios.get, endpoint));

        // gen.next() takes argument to set value returned from previous yield
        expect(
            gen.next(mockGetAllShopsFromAPI as AxiosResponse).value
        )
        .toMatchObject( 
            put(getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops))
        );
    });

    it('handles error in expected manner', () => {
        // jest throws when you create an Error object???????????? why???????????????????????????????????
        // I even tried declaring an Error object in another module and importing it here, and JEST THROWS ONCE IT IMPORTS THE MODULE????
        //  because of this, I'm using try->catch
        try { new Error('test error') } catch (err) {
            const gen = getAllTeaShopsSaga();
            expect(
                gen.throw(err).value
            )
            .toMatchObject(
                put(getAllTeaShopsFailed(err))
            );
        }
    });

    it('properly watches for the saga', () => {
        const gen = watchTeaShopsSaga();
        expect( 
            gen.next().value
        )
        .toMatchObject(
            all([
                takeLatest(TeaShopActionTypes.GET_ALL_TEASHOPS, getAllTeaShopsSaga)
            ])
        );
    });
});