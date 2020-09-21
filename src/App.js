import React , {useState} from 'react';
import './App.css';
import Message from './Messsage';

function App() {
  let [count, setCount] = useState(0)
    return (
    <div className="App">
      <Message  counter={count} />
    <button onClick={
      ()=> setCount(++count)}>
      Increment
    </button>

    </div>
  );
}

export default App;
