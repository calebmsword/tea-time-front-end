import rootSaga, { RootSagaReturnType } from './rootSaga';
import { all, fork } from 'redux-saga/effects';
import watchGetTeaShopsSaga from '../getTeaShopsSagas/getTeaShopsSagas';
import watchAddTeaShopSaga from '../addTeaShopSagas/addTeaShopSagas';
import watchEditTeaShopSaga from '../editTeaShopSagas/editTeaShopSagas';
import watchDeleteTeaShopSaga from '../deleteTeaShopSaga/deleteTeaShopSaga';

let generator:RootSagaReturnType;

describe('testing rootSaga', () => {
    
    beforeEach( () => {
        generator = rootSaga();
    });
    
    it('the rootSaga forks all watchers', () => {
        expect((generator.next().value)).toMatchObject(all([
            fork(watchGetTeaShopsSaga),
            fork(watchAddTeaShopSaga),
            fork(watchEditTeaShopSaga),
            fork(watchDeleteTeaShopSaga),
        ]));
    });
    
});