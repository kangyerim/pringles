import {createStore} from 'redux'
import {createBrowerHistory} from 'history'
import reducers from "../_components/configureStore";

export const history = createBrowerHistory()

function configureStore(history) {
    return createStore(
        reducers(history),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}
