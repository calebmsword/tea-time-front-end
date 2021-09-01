import { addTeaShopSucceeded, addTeaShopFailed, getAllTeaShops, addTeaShopReturn } from "../../actions/teaShopActions";
import { call, put, take  } from "redux-saga/effects";
import axios from 'axios';
import { TeaShopActionTypes } from "../../types";
import { endpoint, ITeaShop } from "../../../entities";

export function* addTeaShopSaga(teaShopToAdd: ITeaShop) {
    try {
        yield call(axios.post, endpoint, teaShopToAdd);
        yield put(addTeaShopSucceeded());
        yield put(getAllTeaShops());
    } catch(error) {
        yield put(addTeaShopFailed(error));
    }
}

function* watchAddTeaShopSaga() {
    while (true) {
        const action:addTeaShopReturn = yield take(TeaShopActionTypes.ADD_TEASHOP);
        yield call(addTeaShopSaga, action.payload);
    }
}

export type addTeaShopSagaReturnType = ReturnType<typeof addTeaShopSaga>;
export type watchAddTeaShopSagaReturnType = ReturnType<typeof watchAddTeaShopSaga>;
export default watchAddTeaShopSaga;