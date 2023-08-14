import { createStore,combineReducers } from 'redux'

//import reducer_do_list from "../../../my_to_do_list/src/reduxi/do_list_reducer";
import reducer_do_list from "./do_list_reducer";

let reducers = combineReducers({
        do_list : reducer_do_list}
    // sidebar : reducer_sidebar}0
);

let store = createStore(reducers);

window.store = store;

export default store;