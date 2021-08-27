import { all, fork } from 'redux-saga/effects';
import watchTeaShopsSaga from './getTeaShopsSagas/getTeaShopsSagas';

function* rootSaga() {
    yield all([
        fork(watchTeaShopsSaga)
    ]);
}

export default rootSaga;