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

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  const handleClickRight = () => {
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  const handleClickReset = () => {
    setClicks([])
  }

  const left = clicks.filter(clicks => clicks === 'L')
  const right = clicks.filter(clicks => clicks === 'R')

  return (
    <div>
      {left.length}
      <Button handle={handleClickLeft} text='left' />
      <Button handle={handleClickRight} text='right' />
      {right.length}
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
