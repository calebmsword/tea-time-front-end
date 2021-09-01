import { getAllTeaShops, editTeaShopSucceeded, editTeaShopFailed, editTeaShopReturn } from "../../actions/teaShopActions";
import axios from "axios";
import { call, put, take } from 'redux-saga/effects';
import { ITeaShop, endpoint} from '../../../entities';
import { TeaShopActionTypes } from '../../types';

export function* editTeaShopSaga (teaShopToEdit:ITeaShop) {
    try {
        yield call(axios.post, `${endpoint}/${teaShopToEdit.id}`, teaShopToEdit);
        yield put(editTeaShopSucceeded());
        yield put(getAllTeaShops());
    } catch (error) {
        yield put(editTeaShopFailed(error));
    }
}

function* watchEditTeaShopSaga () {
    while(true) {
        const action:editTeaShopReturn = yield take(TeaShopActionTypes.EDIT_TEASHOP);
        yield call(editTeaShopSaga, action.payload);
    }
}

export type editTeaShopSagaReturn = ReturnType<typeof editTeaShopSaga>;
export type watchEditTeaShopSagaReturn = ReturnType<typeof watchEditTeaShopSaga>;
export default watchEditTeaShopSaga;