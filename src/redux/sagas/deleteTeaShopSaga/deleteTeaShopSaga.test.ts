import watchDeleteTeaShopSaga, { deleteTeaShopSaga, watchDeleteTeaShopSagaReturnType, deleteTeaShopSagaReturnType } from "./deleteTeaShopSaga";
import { call, put, take } from "redux-saga/effects";
import { deleteTeaShop, deleteTeaShopFailed, deleteTeaShopSucceeded, getAllTeaShops } from "../../actions/teaShopActions";
import axios from 'axios';
import { TeaShopActionTypes } from "../../types";
import { testTeaShopID, endpoint, testError, noTeaShopIDError } from '../../../entities';

let generator:deleteTeaShopSagaReturnType | watchDeleteTeaShopSagaReturnType;

describe('testing deleteTeaShopSaga', () => {

    beforeEach( () => {
        generator = deleteTeaShopSaga(testTeaShopID);
    });
    
    it('generates the expected objects', () => {
        
        expect( 
            generator.next().value
        )
        .toEqual(
            call(axios.delete, `${endpoint}/${testTeaShopID}`)
        );

        expect(
            generator.next().value
        )
        .toEqual(
            put(deleteTeaShopSucceeded())
        );

        expect(
            generator.next().value
        )
        .toEqual(
            put(getAllTeaShops())
        );

    });

    it('handles errors in the expected manner', () => {

        generator.next();

        expect(
            generator.throw(testError).value
        )
        .toEqual(
            put(deleteTeaShopFailed(testError))
        );

    });

    it('throws error if tea shop id is undefined', () => {
        // TypeScript throws warning if we pass undefined as arg, so the following
        // casting hack lets you override the error
        generator = deleteTeaShopSaga(undefined as unknown as string);

        expect(
            generator.next().value
        )
        .toEqual(
            put(deleteTeaShopFailed(noTeaShopIDError))
        )
        
    })

});

describe('testing watchDeleteTeaShopsSaga', () => {

    beforeEach( () => {
        generator = watchDeleteTeaShopSaga();
    });

    it('properly watches for the saga', () => {

        expect(
            generator.next().value
        )
        .toMatchObject(
            take(TeaShopActionTypes.DELETE_TEASHOP)
        );

        expect(
            generator.next(deleteTeaShop(testTeaShopID)).value
        )
        .toMatchObject(
            call(deleteTeaShopSaga, deleteTeaShop(testTeaShopID).payload)
        );

    });

});