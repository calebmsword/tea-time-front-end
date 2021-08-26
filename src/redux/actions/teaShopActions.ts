import { TeaShop, TeaShopActionTypes } from '../types';

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


// export const getTeaShopByID = () => ({
//     type: 'GET_TEASHOP',
// });

// export const addTeaShop = () => ({
//     type: 'ADD_TEASHOP',
// });

// export const updateTeaShop = () => ({
//     type: 'UPDATE_TEASHOP',
// });

// export const deleteTeaShop = () => ({
//     type: 'DELETE_TEASHOP',
// });