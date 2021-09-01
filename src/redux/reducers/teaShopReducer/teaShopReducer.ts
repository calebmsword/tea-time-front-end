import { ITeaShopState, TeaShopAction, TeaShopActionTypes } from '../../types';
import { initialTeaShopsState } from '../../../entities';

const teaShopReducer = (state: ITeaShopState = initialTeaShopsState, action: TeaShopAction) => {
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
                addOrEditTeaShopLoading: true,
            });
        case TeaShopActionTypes.ADD_TEASHOP_SUCCESS:
            return ({
                ...state,
                addOrEditTeaShopLoading: false,
                addOrEditTeaShopError: null,
            });
        case TeaShopActionTypes.ADD_TEASHOP_FAILURE:
            return ({
                ...state,
                addOrEditTeaShopLoading: false,
                addOrEditTeaShopError: action.payload,
            });
        case TeaShopActionTypes.EDIT_TEASHOP:
            return ({
                ...state,
                addOrEditTeaShopLoading: true,
            });
        case TeaShopActionTypes.EDIT_TEASHOP_SUCCESS:
            return ({
                ...state,
                addOrEditTeaShopLoading: false,
                addOrEditTeaShopError: null,
            });
        case TeaShopActionTypes.EDIT_TEASHOP_FAILURE:
            return ({
                ...state,
                addOrEditTeaShopLoading: false,
                addOrEditTeaShopError: action.payload,
            });
        case TeaShopActionTypes.DELETE_TEASHOP:
            return ({
                ...state,
                deleteTeaShopLoading: true,
            });
        case TeaShopActionTypes.DELETE_TEASHOP_SUCCESS:
            return ({
                ...state,
                deleteTeaShopLoading: false,
                deleteTeaShopError: null,
            });
        case TeaShopActionTypes.DELETE_TEASHOP_FAILURE:
            return ({
                ...state,
                deleteTeaShopLoading: false,
                deleteTeaShopError: action.payload,
            });
        default:
            return ({
                ...state
            });
    }
};

export default teaShopReducer;