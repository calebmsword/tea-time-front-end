import { TeaShopState, TeaShopAction, TeaShopActionTypes } from '../../types';

const inititalState : TeaShopState = {
    loading: false,
    teaShops: [
        {
            name: 'Yeet',
            id: 'skeet',
            address: {
                streetName: 'bleh',
                city: "blh",
                areaCode: 'blah',
                state: 'bluh',
            }
        },
        {
            name: 'Skeet',
            id: 'yeet',
            address: {
                streetName: 'blih',
                city: "blaskljdfha",
                areaCode: 'bloh',
                state: 'blyh',
            }
        },
    ],
    error: null,
}

const teaShopReducer = (state: TeaShopState = inititalState, action: TeaShopAction) => {
    switch (action.type) {
        case TeaShopActionTypes.GET_ALL_TEASHOPS:
            return ({
                ...state,
                loading: true,
            });
        case TeaShopActionTypes.GET_ALL_TEASHOPS_SUCCESS:
            return ({
                ...state,
                loading: false,
                teaShops: action.payload,
                error: null,
            });
        case TeaShopActionTypes.GET_ALL_TEASHOPS_FAILURE:
            return ({
                ...state,
                loading: false,
                teaShops: [],
                error: action.payload,
            });
        default:
            return ({
                ...state
            });
    };
};

export default teaShopReducer;