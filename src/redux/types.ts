import { ITeaShop } from "../entities";

export enum TeaShopActionTypes {
    GET_ALL_TEASHOPS = 'GET_ALL_TEASHOPS',
    GET_ALL_TEASHOPS_SUCCESS = 'GET_ALL_TEASHOPS_SUCCESS',
    GET_ALL_TEASHOPS_FAILURE = 'GET_ALL_TEASHOPS_FAILURE',
    ADD_TEASHOP = 'ADD_TEASHOP',
    ADD_TEASHOP_SUCCESS = 'ADD_TEASHOP_SUCCESS',
    ADD_TEASHOP_FAILURE = 'ADD_TEASHOP_FAILURE',
    EDIT_TEASHOP = 'EDIT_TEASHOP',
    EDIT_TEASHOP_SUCCESS = 'EDIT_TEASHOP_SUCCESS',
    EDIT_TEASHOP_FAILURE = 'EDIT_TEASHOP_FAILURE',
    DELETE_TEASHOP = 'DELETE_TEASHOP',
    DELETE_TEASHOP_SUCCESS = 'DELETE_TEASHOP_SUCCESS',
    DELETE_TEASHOP_FAILURE = 'DELETE_TEASHOP_FAILURE',
}

export interface TeaShopAction {
    type: TeaShopActionTypes,
    payload?: any,
}

export interface ITeaShopState {
    getAllTeaShopsLoading: boolean,
    addOrEditTeaShopLoading: boolean,
    teaShops: ITeaShop[] | [],
    getAllTeaShopsError: Error | null,
    addOrEditTeaShopError: Error | null,
    deleteTeaShopLoading: boolean,
    deleteTeaShopError: Error | null,
}
