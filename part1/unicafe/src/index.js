import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return <button onClick={props.vot}>{props.text}</button>
}

const Statistics = (props) => {
  const goods = (props.good - props.bad)
  const goodsTotal = + props.good
  const total = (props.good + props.neutral + props.bad)
  const average = goods / total
  const positive = goodsTotal * 100 / total
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}</td>
        </tr>
      </table>
    </div>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const votGood = () => { setGood(good + 1) }
  const votNeutral = () => { setNeutral(neutral + 1) }
  const votBad = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button vot={votGood} text='good' />
      <Button vot={votNeutral} text='neutral' />
      <Button vot={votBad} text='bad' />
      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
