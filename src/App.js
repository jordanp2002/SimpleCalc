import "./style.css"
function App() {
  return (
    <div className="calc">
      <div className = "output">
        <div className="previousOp"></div>
        <div className ="CurrentOp"></div>
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
