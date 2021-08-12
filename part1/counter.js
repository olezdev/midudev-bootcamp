import ReactDOM from "react-dom";
import {useState} from "react";

const Display = ({counter}) => <h1>{counter}</h1>

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>
      {text}
    </button> 
  )

const App = (props) => {
  const [counter, setCounter] = useState(6);
  /*
  const counter = useState(0);
  const counterValue = counter[0];
  const counterUpdate = counter[1];
  */
  const increseByOne = () => { setCounter(counter + 1) }
  const decreseByOne = () => { setCounter(counter - 1) }
  const setToZero = () => { setCounter(0)  }

  const isEven = counter % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar'
  console.log('render')

  return (
    <div>
      <p>El valor del contador es:</p>
      <Display counter = {counter} />
      <p>{mensajePar}</p>
      <Button 
        handleClick = {increseByOne}
        text = 'Incrementar' 
      />
      <Button 
        handleClick = {decreseByOne}
        text = 'Decrementar' 
      />
      <Button 
        handleClick = {setToZero}
        text = 'Reset' 
      />
    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
