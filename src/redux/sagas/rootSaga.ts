import { all, fork } from 'redux-saga/effects';
import watchTeaShopsSaga from './getTeaShopSagas/getTeaShopSagas';

function* rootSaga() {
    yield all([
        fork(watchTeaShopsSaga)
    ]);
}

export default rootSaga;