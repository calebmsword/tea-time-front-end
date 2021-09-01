import { getAllTeaShops, getAllTeaShopsFailed, getAllTeaShopsSucceeded } from "../../actions/teaShopActions";
import rootReducer from "./rootReducer";
import { mockGetAllShopsFromAPI, testError } from '../../../entities'; 

describe('testing rootReducer', () => {
    it.each([
        [
            getAllTeaShopsFailed(testError).type,
            getAllTeaShopsFailed(testError),
        ],
        [
            getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops).type,
            getAllTeaShopsSucceeded(mockGetAllShopsFromAPI.data.teaShops),
        ],
        [
            getAllTeaShops().type,
            getAllTeaShops(),
        ],
    ])('the rootReducer can take action of type %s as an argument without runtime errors', (type, action) => {
        rootReducer(undefined, {
            ...action, 
            type: type, 
        });
    });

});