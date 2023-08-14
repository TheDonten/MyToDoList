

import Do_css from "./Do_List.module.css"
import {useDispatch, useSelector} from "react-redux";
import AllActions from "../../AllAction/AllActions";
import {useEffect, useRef, useState} from "react";




const Create_do = () => {
    const dispatch = useDispatch()

        function HandlerDragStart(e,el) {

            e.currentTarget.style.backgroundColor = "gray";
            dispatch(AllActions.SAVE_ELEMENT(el))

        }

        function HandlerDragLeave(e,el) {
            e.currentTarget.style.backgroundColor = "white";


        }

        function HandlerDragEnd(e,el) {
            e.currentTarget.style.backgroundColor = "white";

        }

        function HandlerDragOver(e,el) {
            e.preventDefault()
            e.currentTarget.style.backgroundColor = "gray";

        }

        function HandlerOnDrop(e,el) {
            //my_ref.current.style.backgroundColor = 'white'
            e.currentTarget.style.backgroundColor = "white";
            dispatch(AllActions.SWAP_ELEMENT(el))

        }

    const AllTask = useSelector(state => state.do_list)
    return (
                AllTask.list_items.map( (el) => {

                return (
                    <div  className={Do_css.Main} draggable={true}
                                  onDragStart={(e) => HandlerDragStart(e, el)}
                                  onDragOver={(e) => HandlerDragOver(e, el)}
                                  onDragEnd={(e) => HandlerDragEnd(e, el)}
                                  onDragLeave={(e) => HandlerDragLeave(e, el)}
                                  onDrop={(e) => HandlerOnDrop(e, el)}
                            >
                                <div className={Do_css.Text}>{el.NewText}</div>
                                <div className={Do_css.Assigment} onClick={ () => dispatch(AllActions.CONFIRMED_DO(el.id))}>{el.confirmed && "YES"} {!el.confirmed && "NO" }</div>
                                <button className={Do_css.Button} onClick={ () => {
                                    dispatch(AllActions.DELETE_DO(el.id))}}> Delete</button>
                            </div>
                )
                })
    )
}

export default Create_do;