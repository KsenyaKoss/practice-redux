import {createStore, combineReducers} from 'redux'
import {usersReducer} from './Users/redusers'

const rootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(rootReducer)