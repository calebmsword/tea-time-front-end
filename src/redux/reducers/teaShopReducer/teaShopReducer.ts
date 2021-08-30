import { TeaShopState, TeaShopAction, TeaShopActionTypes } from '../../types';
import { initialTeaShopsState } from '../../../entities';

const teaShopReducer = (state: TeaShopState = initialTeaShopsState, action: TeaShopAction) => {
    switch (action.type) {
        case TeaShopActionTypes.GET_ALL_TEASHOPS:
            return ({
                ...state,
                getAllTeaShopsLoading: true,
            });
        case TeaShopActionTypes.GET_ALL_TEASHOPS_SUCCESS:
            return ({
                ...state,
                getAllTeaShopsLoading: false,
                teaShops: action.payload,
                getAllTeaShopsError: null,
            });
        case TeaShopActionTypes.GET_ALL_TEASHOPS_FAILURE:
            return ({
                ...state,
                getAllTeaShopsLoading: false,
                teaShops: [],
                getAllTeaShopsError: action.payload,
            });
        case TeaShopActionTypes.ADD_TEASHOP:
            return ({
                ...state,
                addTeaShopLoading: true,
            });
        case TeaShopActionTypes.ADD_TEASHOP_SUCCESS:
            return ({
                ...state,
                addTeaShopLoading: false,
                addTeaShopError: null,
            });
        case TeaShopActionTypes.ADD_TEASHOP_FAILURE:
            return ({
                ...state,
                addTeaShopLoading: false,
                addTeaShopError: action.payload,
            });
        default:
            return ({
                ...state
            });
    };
};

export default teaShopReducer;