import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(mySaga)

export type Store = ReturnType<typeof reducer>;
export default store;
