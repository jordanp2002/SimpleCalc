import {ACTIONS} from "./App";
import "./style.css"
export default function NumberButton({dispatch, digit}){
    return <button className="Digit" onClick={() => dispatch({type: ACTIONS.add_digit, payload:{digit} })}>{digit}</button>
}
