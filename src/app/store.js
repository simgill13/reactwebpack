import {createStore} from 'redux';
import * as reducers from './reducers/reducer'

export default createStore(reducers.repositoryReducer);