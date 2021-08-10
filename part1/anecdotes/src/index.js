import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ click, text }) => {
  return <button onClick={click}>{text}</button>
};
const Display = (props) => {
  //console.log(props.points)
  //console.log(props.index)
  return <p>has {props.points[props.index]} votes</p>
};
const DisplayMostVotes = (props) => {
  let maxValue = Math.max(...props.points)
  let maxIndex = 0
  for (let pointValue of props.points) {
    if (maxValue <= pointValue) {
      maxValue = pointValue;
      maxIndex = props.points.indexOf(Math.max(...props.points));
      return (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{props.anecdotes[maxIndex]}</p>
          <p>has {maxValue} votes</p>
        </div>
      )
    }
  }
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const next = () => setSelected(Math.floor(Math.random() * 5));

  const valueArray = props.anecdotes.length
  const arrayAnecdotes = Array(valueArray + 1).join("0").split("").map(parseFloat);
  const [points, setPoints] = useState(arrayAnecdotes);
  const vote = () => {
    setPoints(prevPoints => [...prevPoints], points[selected]++)
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[selected]}</p>
      <Display points={points} index={selected} />
      <Button click={vote} text="vote" />
      <Button click={next} text="next anecdote" />
      <DisplayMostVotes points={points} index={selected} anecdotes={props.anecdotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
