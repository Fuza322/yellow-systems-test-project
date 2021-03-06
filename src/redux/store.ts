import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {appReducer, AppReducerActionsType} from "./reducers/app-reducer"
import {loginReducer} from "./reducers/login-reducer"
import {jogsReducer, JogsReducerActionsType} from "./reducers/jogs-reducer"

const rootReducer = combineReducers({
    appReducer: appReducer,
    loginReducer: loginReducer,
    jogsReducer: jogsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = AppReducerActionsType
    //| LoginReducerActionsType
    | JogsReducerActionsType

// @ts-ignore
window.store = store