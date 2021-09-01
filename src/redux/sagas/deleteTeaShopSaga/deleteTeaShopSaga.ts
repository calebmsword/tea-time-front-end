import axios from "axios";
import { call, put, take } from 'redux-saga/effects';
import { deleteTeaShopSucceeded, deleteTeaShopFailed, deleteTeaShopReturn, getAllTeaShops } from "../../actions/teaShopActions";
import { TeaShopActionTypes } from '../../types';
import { endpoint, noTeaShopIDError } from '../../../entities';

export function* deleteTeaShopSaga(teaShopID: string) {
    try {
        if (typeof teaShopID === 'undefined') throw noTeaShopIDError;
        yield call(axios.delete, `${endpoint}/${teaShopID}`);
        yield put(deleteTeaShopSucceeded());
        yield put(getAllTeaShops());
    } catch (error) {
        yield put(deleteTeaShopFailed(error))
    }
}

function* watchDeleteTeaShopSaga() {
    while (true) {
        const action:deleteTeaShopReturn = yield take(TeaShopActionTypes.DELETE_TEASHOP);
        yield call(deleteTeaShopSaga, action.payload);
    }
}

export type deleteTeaShopSagaReturnType = ReturnType<typeof deleteTeaShopSaga>;
export type watchDeleteTeaShopSagaReturnType = ReturnType<typeof watchDeleteTeaShopSaga>;
export default watchDeleteTeaShopSaga;