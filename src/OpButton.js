import {ACTIONS} from "./App";
import "./style.css"
export default function OpButton({dispatch, operation}){
    return <button className="Operations" onClick={() => dispatch({type: ACTIONS.choose_op, payload:{operation} })}>{operation}</button>
}