import { ITeaShop } from "../entities";

export enum TeaShopActionTypes {
    GET_ALL_TEASHOPS = 'GET_ALL_TEASHOPS',
    GET_ALL_TEASHOPS_SUCCESS = 'GET_ALL_TEASHOPS_SUCCESS',
    GET_ALL_TEASHOPS_FAILURE = 'GET_ALL_TEASHOPS_FAILURE',
    ADD_TEASHOP = 'ADD_TEASHOP',
    ADD_TEASHOP_SUCCESS = 'ADD_TEASHOP_SUCCESS',
    ADD_TEASHOP_FAILURE = 'ADD_TEASHOP_FAILURE',
    EDIT_TEASHOP = 'EDIT_TEASHOP',
}

export interface TeaShopAction {
    type: TeaShopActionTypes,
    payload?: any,
}

export interface TeaShopState {
    getAllTeaShopsLoading: boolean,
    addTeaShopLoading: boolean,
    teaShops: ITeaShop[] | [],
    getAllTeaShopsError: Error | null,
    addTeaShopError: Error | null,
}
