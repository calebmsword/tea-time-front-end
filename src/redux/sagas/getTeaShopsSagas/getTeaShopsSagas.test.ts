import watchTeaShopsSaga, { getAllTeaShopsSaga } from "./getTeaShopsSagas";
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getAllTeaShopsFailed, getAllTeaShopsSucceeded } from "../../actions/teaShopActions";
import { endpoint, testError } from '../../../entities';
import axios from 'axios';
import { testTeaShop } from '../../../entities';
import * as Actions from '../../actions/teaShopActions';
import { Mockable } from '../../../entities';

jest.mock('axios');


describe('testing getTeaShopsSagas', () => {
    
    it('generates the expected objects', () => {
        const gen = getAllTeaShopsSaga();
        expect(gen.next().value).toMatchObject(call(axios.get, endpoint));
        
        gen.next();
    });

    it('handles errors in an expected manner', () => {
        const gen = getAllTeaShopsSaga();
        
        expect(gen.throw(testError).value).toMatchObject(put(getAllTeaShopsFailed(testError)));
    })
})