import teaShopReducer from '../teaShopReducer/teaShopReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    teaShops: teaShopReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;