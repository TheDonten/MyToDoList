

const ADD_DO = () => {
    return{
        type : "ADD-DO"
    }
}

const UPDATE_DO = (text) => {
    return{
        type : "UPDATE-DO",
        Text : text
    }
}

const DELETE_DO = (id) => {
    return {
        type: "DELETE-DO",
        id : id

    }
}

const SWAP_ELEMENT = (el1) =>{
    return {
        type: "SWAP-ELEMENT",
        first : el1
    }
}

const SAVE_ELEMENT = (el) =>{
    return{
        type: "SAVE-ELEMENT",
        elem : el
    }
}

const CONFIRMED_DO = (id) => {
    return{
        type : "CONFIRMED-DO",
        id : id
    }
}

const allActions = {
    ADD_DO,
    DELETE_DO,
    CONFIRMED_DO,
    UPDATE_DO,
    SWAP_ELEMENT,
    SAVE_ELEMENT
}

export default allActions;