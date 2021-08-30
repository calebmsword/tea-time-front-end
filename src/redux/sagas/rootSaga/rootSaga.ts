import { all, fork } from 'redux-saga/effects';
import watchGetTeaShopsSaga from '../getTeaShopsSagas/getTeaShopsSagas';
import watchAddTeaShopSaga from '../addTeaShopSagas/addTeaShopSagas';

function* rootSaga() {
    yield all([
        fork(watchGetTeaShopsSaga),
        fork(watchAddTeaShopSaga),
    ]);
}

export type RootSagaReturnType = ReturnType<typeof rootSaga>;
export default rootSaga;