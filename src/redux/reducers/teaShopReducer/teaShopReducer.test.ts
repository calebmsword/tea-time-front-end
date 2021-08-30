import teaShopReducer from "./teaShopReducer";
import { initialTeaShopsState, testTeaShopToAdd } from "../../../entities";
import { getAllTeaShops, getAllTeaShopsSucceeded, getAllTeaShopsFailed, addTeaShop, addTeaShopSucceeded, addTeaShopFailed } from '../../actions/teaShopActions';
import { mockGetAllShopsFromAPI, testError } from '../../../entities';
import { TeaShopActionTypes } from "../../types";

describe('testing teaShopReducer', () => {

    it(`returns expected state when passed action of type ${getAllTeaShops().type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShops())
        )
        .toMatchObject({
            ...initialTeaShopsState,
            loading: true,
        });
    });

    it(`returns expected state when passed action of type ${getAllTeaShopsFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShopsFailed(testError))
        )
        .toMatchObject({
            ...initialTeaShopsState,
            loading: false,
            teaShops: [],
            error: testError,
        });
    });

    it(`returns expected state when passed action of type ${getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops).type}`, () => {
        expect(
            teaShopReducer(undefined, getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops))
        )
        .toMatchObject({
            ...initialTeaShopsState,
            loading: false,
            teaShops: getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops).payload,
            error: null,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShop(testTeaShopToAdd).type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShop(testTeaShopToAdd))
        )
        .toEqual({
            ...initialTeaShopsState,
            loading: true,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShopSucceeded().type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShopSucceeded())
        )
        .toEqual({
            ...initialTeaShopsState,
            loading: false,
            error: null,
        });
    });

    it(`returns expected state when passed action of type ${addTeaShopFailed(testError).type}`, () => {
        expect(
            teaShopReducer(undefined, addTeaShopFailed(testError))
        )
        .toEqual({
            ...initialTeaShopsState,
            loading: false,
            error: testError,
        });
    });

    it('passing a nonsense action leaves the state unchanged', () => {
        expect(
            teaShopReducer(undefined, { 
                type: 'yeet' as TeaShopActionTypes 
            })
        )
        .toMatchObject(initialTeaShopsState);
    });

});