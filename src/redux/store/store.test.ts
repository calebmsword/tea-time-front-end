import { testState } from '../../entities';
import store from './store';

describe('testing store', () => {
    
    it('is initialized with the expected state', () => {
        expect(store.getState()).toEqual(testState)
    });

});