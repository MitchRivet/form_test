import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

//you can check out the redux devtools extension here https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('reducer', reducer)
export default store;