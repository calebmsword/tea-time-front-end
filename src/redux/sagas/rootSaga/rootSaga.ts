import { all, fork } from 'redux-saga/effects';
import watchGetTeaShopsSaga from '../getTeaShopsSagas/getTeaShopsSagas';
import watchAddTeaShopSaga from '../addTeaShopSagas/addTeaShopSagas';
import watchEditTeaShopSaga from '../editTeaShopSagas/editTeaShopSagas';
import watchDeleteTeaShopSaga from '../deleteTeaShopSaga/deleteTeaShopSaga';

function* rootSaga() {
    yield all([
        fork(watchGetTeaShopsSaga),
        fork(watchAddTeaShopSaga),
        fork(watchEditTeaShopSaga),
        fork(watchDeleteTeaShopSaga),
    ]);
}

export type RootSagaReturnType = ReturnType<typeof rootSaga>;
export default rootSaga;