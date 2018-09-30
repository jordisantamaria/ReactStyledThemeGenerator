import { createStore } from 'redux';
import rootReducer from './rootReducer';


export function initializeStore (initialState = {}) {
  return createStore(rootReducer, initialState)
}