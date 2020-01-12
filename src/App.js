import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import CountDisplay from './Components/CountDisplay'

function App() {
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count+1)
  console.log(count);
}

const decrement = () => {
  setCount(count-1)
  console.log(count);
}

useEffect( () => {console.log('count changed')},[count])

return (
  <div className="App">
    <header className="App-header">
      <CountDisplay count={count}/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </header>
  </div>
);
}

export default App;
