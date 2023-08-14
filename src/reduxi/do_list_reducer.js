import {cloneElement} from "react";

const ADD_DO = "ADD-DO";
const DELETE_DO = "DELETE-DO"
const CONFIRMED_DO = "CONFIRMED-DO"
const UPDATE_DO = "UPDATE-DO"
const SWAP_ELEMENT = "SWAP-ELEMENT"
const SAVE_ELEMENT = "SAVE-ELEMENT"

let initialState = {
    list_items: [{id : 0, NewText: "SAmple Gavrick Debil", confirmed: false},
        {id : 1, NewText: "Здравствуйте", confirmed: false},
        {id : 2, NewText: "Pomogite", confirmed: false},
        {id : 3, NewText: "4To delat?", confirmed: false}
    ],
    id:0,
    NewText: "",
    confirmed : false,
    this_list : null
}


const add_do = (state) =>{
    let newDo = {
        id : (state.list_items.length),
        confirmed: false,
        NewText: state.NewText
    }
    state.list_items.push(newDo)
    state.NewText = ""
    return state;
}

const save_element = (state,elem) =>{
    state.this_list = elem;
    return state
}

const swap_element = (state,el1) =>{
    let [index_first,index_second] = [el1.id,state.this_list.id];
    state.list_items[index_first].id = index_second;
    state.list_items[index_second].id = index_first;

    [state.list_items[index_first],state.list_items[index_second]] = [state.list_items[index_second],state.list_items[index_first]]

    return state
}

const update_text = (state,newText) =>{
    state.NewText = newText;
    return state;
}

const update_conf = (state,id) =>{
    let myIndex = state.list_items.findIndex(el => el.id === id);
    state.list_items[myIndex].confirmed = state.list_items[myIndex].confirmed !== true;
    return state
}

const delete_do = (state,id) =>{
    let myIndex = state.list_items.findIndex(el => el.id === id)
    state.list_items.splice(myIndex,1)
    for(let i = 0; i < state.list_items.length; i++){
        state.list_items[i].id = i;
    }
    return state
}

const reducer_do_list = (state = initialState, action) =>{

    let statecopy = structuredClone(state)
    switch(action.type) {
        case ADD_DO:
            return add_do(statecopy)
        case DELETE_DO:
            return delete_do(statecopy,action.id)
        case CONFIRMED_DO:
            return update_conf(statecopy,action.id)
        case UPDATE_DO:
            return update_text(statecopy,action.Text)
        case SWAP_ELEMENT:
            return swap_element(statecopy,action.first,action.second)
        case SAVE_ELEMENT:
            return save_element(state,action.elem)
        default:
            console.log("MDa")


            return state
    }

}

export default reducer_do_list;