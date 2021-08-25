import { State, Action } from './types';

const reducer = (state: State, action: Action): State => {
    const newState = { ...state };
    switch (action.type) {
        default:
            return newState;
    }
}

export default reducer;