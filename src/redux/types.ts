import { ITeaShop, TeaShop } from "../entities";

export enum TeaShopActionTypes {
    GET_ALL_TEASHOPS = 'GET_ALL_TEASHOPS',
    GET_ALL_TEASHOPS_SUCCESS = 'GET_ALL_TEASHOPS_SUCCESS',
    GET_ALL_TEASHOPS_FAILURE = 'GET_ALL_TEASHOPS_FAILURE',
    ADD_TEASHOP = 'ADD_TEASHOP',
    EDIT_TEASHOP = 'EDIT_TEASHOP',
}

export interface TeaShopAction {
    type: TeaShopActionTypes,
    payload?: any,
}

export interface TeaShopState {
    loading: boolean,
    teaShops: ITeaShop[],
    error: Error | null,
}

export class State {
	teaShops: TeaShop[];
	constructor(teaShops: TeaShop[]) {
		this.teaShops = teaShops;
	}
}