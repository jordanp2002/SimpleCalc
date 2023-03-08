import "./style.css"
import {useReducer} from "react";
import NumberButton from "./NumberButton";
import OpButton from "./OpButton";
export const ACTIONS={
    add_digit: 'add-digit',
    clear: 'clear',
    del_digit: 'delete-digit',
    choose_op: 'choose-op',
    equal: 'equals'
}
function reducer(state,{type, payload}){
    switch(type){
        case ACTIONS.add_digit:
            if(state.overwrite){
                return{
                    ...state, CurrentOP: payload.digit, overwrite: false,
                }
            }

            if (payload.digit === "." && state.CurrentOP == null) { return state }
            if (payload.digit === "." && state.CurrentOP.includes(".")) { return state }
            return{
                ...state,
                CurrentOP: `${state.CurrentOP || ""}${payload.digit}`
            }
        case ACTIONS.clear:
            return {

            }
        case ACTIONS.choose_op:
            if(state.CurrentOP == null && state.previousOP == null){
                return state
            }
            if(state.CurrentOP == null){
                return{
                    ...state, operation: payload.operation,
                }
            }
            if(state.previousOP == null){
                return {
                    ...state, operation: payload.operation, previousOP: state.CurrentOP, CurrentOP: null,
                }
            }
           return {
                ...state, previousOP: evaluate(state),
               operation: payload.operation,
               CurrentOP: null,
           }
        case ACTIONS.equal:
            if(state.operation == null|| state.CurrentOP == null|| state.previousOP == null){
                return state
                }
            return {
                ...state, previousOP: null, operation: null, CurrentOP: evaluate(state)
            }
        case ACTIONS.del_digit:
            if(state.overwrite){
                return{
                    ...state, overwrite: false, CurrentOP: null,
                }
            }
            if(state.CurrentOP == null){
                return state
            }
            if(state.CurrentOP ===1 ){
                return{
                    ...state, CurrentOP: null,
                }
            }
            return{
                ...state, CurrentOP: state.CurrentOP.slice(0,-1)
            }

    }
}
function evaluate({CurrentOP, previousOP, operation}){
    const prev = parseFloat(previousOP)
    const cur = parseFloat(CurrentOP)
    if(isNaN(prev)|| isNaN(cur)) return ""
    let computation = ""
    switch(operation){
        case "+":
            computation = prev + cur
            break;
        case "-":
            computation = prev - cur
            break;
        case "/":
            computation = prev / cur
            break;
        case "*":
            computation = prev * cur
            break;
    }
    return computation.toString()
}
function App() {
    const [{CurrentOP,previousOP,operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calc">
      <div className = "output">
        <div className="previousOp">{previousOP}{operation}</div>
        <div className ="CurrentOp">{CurrentOP}</div>
      </div>
        <OpButton operation="/" dispatch={dispatch}/>
      <button className="Double" onClick={()=> dispatch({type: ACTIONS.clear})}>CLEAR</button>
        <button className = "DELETE" onClick={()=> dispatch({type: ACTIONS.del_digit})}>DEL</button>
        <OpButton operation="-" dispatch={dispatch}/>
        <NumberButton digit="1" dispatch={dispatch}/>
        <NumberButton digit="2" dispatch={dispatch}/>
        <NumberButton digit="3" dispatch={dispatch}/>
        <OpButton operation="+" dispatch={dispatch}/>
        <NumberButton digit="4" dispatch={dispatch}/>
        <NumberButton digit="5" dispatch={dispatch}/>
        <NumberButton digit="6" dispatch={dispatch}/>
        <OpButton operation="*" dispatch={dispatch}/>
        <NumberButton digit="7" dispatch={dispatch}/>
        <NumberButton digit="8" dispatch={dispatch}/>
        <NumberButton digit="9" dispatch={dispatch}/>
        <NumberButton digit="." dispatch={dispatch}/>
        <NumberButton digit="0" dispatch={dispatch}/>
      <button className="Double" onClick={()=> dispatch({type: ACTIONS.equal})}>=</button>
    </div>
  );
}



export default App;
