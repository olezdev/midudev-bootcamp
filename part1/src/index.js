import ReactDOM from 'react-dom';
import Mensaje from './mensaje.js'

const App = () => {
  const a = 10
  const b = 20
  return (
  <div>
    <Mensaje message='estamos trabajando'/>
    <Mensaje message='en un curso'/>
    <Mensaje message='de React'/>
    <p>
      {a} plus {b} is {a + b}
    </p>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))