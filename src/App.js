import React , {useState} from 'react';
import './App.css';
import Message from './Messsage';

function App() {
  let [count, setCount] = useState(0)
  let [checkTime, setCheckTime]= useState(true)
    return (
      <div className={`App box ${ checkTime ? 'dayTime' : 'nighTime' }`}>
      <Message  counter={count} />
      <button onClick={
      ()=> setCount(++count)}>
      Increment
      </button>
      <h3 style={{color:'gray'}}>Time is : {checkTime ? ' Day' : ' Night' }</h3>
        <button onClick={()=> setCheckTime (!checkTime)}> Check Time </button>
    </div>
  );
}

export default App;
