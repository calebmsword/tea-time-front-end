import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAllTeaShopsSucceeded, getAllTeaShopsFailed } from '../../actions/teaShopActions';
import { TeaShopActionTypes } from '../../types';
import { endpoint } from '../../../entities';

export function* getAllTeaShopsSaga() {
    try {
        const res:AxiosResponse = yield call(axios.get, endpoint);
        yield put(getAllTeaShopsSucceeded(res.data.teaShops))
    } catch (error) {
        yield put(getAllTeaShopsFailed(error));
    }
}

function* watchTeaShopsSaga() {
    yield all([
        takeLatest(TeaShopActionTypes.GET_ALL_TEASHOPS, getAllTeaShopsSaga)
    ]);
}

export default watchTeaShopsSaga;