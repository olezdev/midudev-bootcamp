import ReactDOM from "react-dom";
import {useState} from "react";
import "./styles.css";

const Button = (props) => {
  return <button onClick={props.handle}>{props.text}</button>
}
const WarningNotUse = () => <h1>Todavia no se ha usado contador</h1>

const ListOfClicks = ({clicks}) => {
  // console.log({clicks});
  // debugger;
  return <p>{clicks.join(", ")}</p>
}

const INITIAL_STATE = {
  left: 0,
  right: 0,
  clicks: 0,
  mensaje: 'Mensaje en el estado'
}

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [counters, setCounters] = useState(INITIAL_STATE)
  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1
    }
    setCounters(newCountersState);
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    })
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  const handleClickReset = () => {
    setCounters(INITIAL_STATE)
    setClicks([])
  }

  return (
    <div>
      {counters.left}
      <Button handle={handleClickLeft} text='left' />
      <Button handle={handleClickRight} text='right' />
      {counters.right}
      <p>Clicks totales: {clicks.length}</p>
      <Button handle={handleClickReset} text='reset' />
      {clicks.length === 0 ? (
        <WarningNotUse />
      ) : (
        <ListOfClicks clicks={clicks}/>
      )}
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);