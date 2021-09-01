import { TeaShopActionTypes } from '../types';
import { TeaShop, ITeaShop } from '../../entities';

export const getAllTeaShops = () => ({
    type: TeaShopActionTypes.GET_ALL_TEASHOPS,
});

export const getAllTeaShopsSucceeded = (payload: TeaShop[]) => ({
    type: TeaShopActionTypes.GET_ALL_TEASHOPS_SUCCESS,
    payload,
});

export const getAllTeaShopsFailed = (payload: Error) => ({
    type: TeaShopActionTypes.GET_ALL_TEASHOPS_FAILURE,
    payload,
});

export const addTeaShop = (payload: ITeaShop) => ({
    type: TeaShopActionTypes.ADD_TEASHOP,
    payload,
});

export const addTeaShopSucceeded = () => ({
    type: TeaShopActionTypes.ADD_TEASHOP_SUCCESS,
});

export const addTeaShopFailed = (payload: Error) => ({
    type: TeaShopActionTypes.ADD_TEASHOP_FAILURE,
    payload,
});

export const editTeaShop = (payload: ITeaShop) => ({
    type: TeaShopActionTypes.EDIT_TEASHOP,
    payload,
});

export const editTeaShopSucceeded = () => ({
    type: TeaShopActionTypes.EDIT_TEASHOP_SUCCESS,
});

export const editTeaShopFailed = (payload: Error) => ({
    type: TeaShopActionTypes.EDIT_TEASHOP_FAILURE,
    payload,
});

export const deleteTeaShop = (payload: string) => ({
    type: TeaShopActionTypes.DELETE_TEASHOP,
    payload,
});

export const deleteTeaShopSucceeded = () => ({
    type: TeaShopActionTypes.DELETE_TEASHOP_SUCCESS,
});

export const deleteTeaShopFailed = (payload: Error) => ({
    type: TeaShopActionTypes.DELETE_TEASHOP_FAILURE,
    payload,
})

export type deleteTeaShopReturn = ReturnType<typeof deleteTeaShop>;
export type addTeaShopReturn = ReturnType<typeof addTeaShop>;
export type editTeaShopReturn = ReturnType<typeof editTeaShop>;