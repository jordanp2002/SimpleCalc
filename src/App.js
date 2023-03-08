import "./style.css"
import {useReducer} from "react";
const ACTIONS={
    add_digit: 'add-digit',
    clear: 'clear',
    del_digit: 'delete-digit',
    choose_op: 'choose-op',
    equal: 'equals'
}
function reducer(state,{type, parmeters}){
    switch(type){
        case ACTIONS.add_digit:
            return{
                ...state,
                CurrentOP: `${CurrentOP || ""}${parmeters.digit}`
            }
    }
}
function App() {
    const [{CurrentOP,previousOP,operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calc">
      <div className = "output">
        <div className="previousOp">{previousOP}{operation}</div>
        <div className ="CurrentOp">{CurrentOP}</div>
      </div>
        <button>/</button>
      <button className="Double">CLEAR</button>
        <button>DEL</button>

      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
        <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>*</button>
        <button>7</button>
        <button>8</button>
      <button>9</button>
      <button>.</button>
        <button>0</button>
      <button className="Double">=</button>
    </div>
  );
}



export default App;
