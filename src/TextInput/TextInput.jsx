import {useRef, useState} from "react";
import TextInput_css from "./TextInput.module.css"
import {useDispatch} from "react-redux";
import AllActions from "../AllAction/AllActions";





const TextInput = () => {

    let [localText,SetText] = useState("")

    const textarea_ = useRef(null)
    const dispatch = useDispatch();

    const HandleTextAreaUpdate = (text) => {
        let text_me = text.current.value;
        dispatch(AllActions.UPDATE_DO(text_me))
    }
    const HandleOnClickButton = () => {
        dispatch(AllActions.ADD_DO())
        textarea_.current.value = "";
    }

    return (
        <div className={TextInput_css.Write_Box}>
            <textarea  ref = {textarea_} placeholder={"Sample"} onKeyPress={(e) => {if (e.key === "Enter") HandleOnClickButton() }} onChange = { () => {
            HandleTextAreaUpdate(textarea_)
            }}/>
            <button onClick={() => {HandleOnClickButton()}}>Add Post</button>
        </div>
    )

}

export default TextInput;