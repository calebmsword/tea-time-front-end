import teaShopReducer from "./teaShopReducer";
import { initialTeaShopsState, testTeaShop, testTeaShopToAdd, mockGetAllShopsFromAPI, testError } from "../../../entities";
import { getAllTeaShops, getAllTeaShopsSucceeded, getAllTeaShopsFailed, addTeaShop, addTeaShopSucceeded, addTeaShopFailed, editTeaShop, editTeaShopSucceeded, editTeaShopFailed, deleteTeaShop, deleteTeaShopSucceeded, deleteTeaShopFailed } from '../../actions/teaShopActions';
import { TeaShopActionTypes } from "../../types";

describe('testing teaShopReducer', () => {

    it(`returns expected state when passed action of type ${getAllTeaShops().type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShops())
        )
        .toMatchObject({
            ...initialTeaShopsState,
            getAllTeaShopsLoading: true,
        });
    });

    it(`returns expected state when passed action of type ${getAllTeaShopsFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShopsFailed(testError))
        )
        .toMatchObject({
            ...initialTeaShopsState,
            getAllTeaShopsLoading: false,
            teaShops: [],
            getAllTeaShopsError: testError,
        });
    });

    it(`returns expected state when passed action of type ${getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops).type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops))
        )
        .toMatchObject({
            ...initialTeaShopsState,
            getAllTeaShopsLoading: false,
            teaShops: getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops).payload,
            getAllTeaShopsError: null,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShop(testTeaShopToAdd).type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShop(testTeaShopToAdd))
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: true,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShopSucceeded().type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShopSucceeded())
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: false,
            addOrEditTeaShopError: null,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShopFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShopFailed(testError))
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: false,
            addOrEditTeaShopError: testError,
        });
    });

    it(`returns expected state when passed action of type ${editTeaShop(testTeaShopToAdd).type}`, () => {
        expect(
            teaShopReducer(undefined, editTeaShop(testTeaShopToAdd))
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: true,
        });
    });

    it(`returns expected state when passed action of type ${editTeaShopSucceeded().type}`, () => {
        expect(
            teaShopReducer(undefined, editTeaShopSucceeded())
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: false,
            addOrEditTeaShopError: null,
        });
    });

    it(`returns expected state when passed action of type ${editTeaShopFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, editTeaShopFailed(testError))
        )
        .toEqual({
            ...initialTeaShopsState,
            addOrEditTeaShopLoading: false,
            addOrEditTeaShopError: testError,
        });
    });

    it(`returns expected state when passed action of type ${deleteTeaShop(testTeaShop.id).type}`, () => {
        expect(
            teaShopReducer(undefined, deleteTeaShop(testTeaShop.id))
        )
        .toEqual({
            ...initialTeaShopsState,
            deleteTeaShopLoading: true,
        });
    });

    it(`returns expected state when passed action of type ${deleteTeaShopSucceeded().type}`, () => {
        expect(
            teaShopReducer(undefined, deleteTeaShopSucceeded())
        )
        .toEqual({
            ...initialTeaShopsState,
            deleteTeaShopLoading: false,
            deleteTeaShopError: null,
        });
    });

    it(`returns expected state when passed action of type ${deleteTeaShopFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, deleteTeaShopFailed(testError))
        )
        .toEqual({
            ...initialTeaShopsState,
            deleteTeaShopLoading: false,
            deleteTeaShopError: testError,
        });
    });

    it('passing a action with unaccounted type leaves the state unchanged', () => {
        expect(
            teaShopReducer(undefined, { 
                type: 'yeet' as TeaShopActionTypes 
            })
        )
        .toMatchObject(initialTeaShopsState);
    });

    

});