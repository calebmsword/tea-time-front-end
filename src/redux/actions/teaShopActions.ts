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

// export const updateTeaShop = () => ({
//     type: 'UPDATE_TEASHOP',
// });

// export const deleteTeaShop = () => ({
//     type: 'DELETE_TEASHOP',
// });

export type addTeaShopReturn = ReturnType<typeof addTeaShop>;