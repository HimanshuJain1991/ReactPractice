import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom/client";

function App() {

  var [add, setAdd] = useState(0);

  const incrementCounter = () => {
    if (add >= 0 && add != 10) {
      add++;
      setAdd(add)

    }
    if (add == 10) {
      alert("you hav reached maximum limit:");
    }
  }
  const decrementCounter = () => {
    if (add > 0) {
      add--;
      setAdd(add);
    }
  }
  const resetCounter = () => {
    add = 0;
    setAdd(add);
  }
  const myElement = (<>
    <>
      <li>Apple</li><li>Banana</li><li>Orange</li>
    </>
    <h1>Working h1 tag</h1>
  </>)

  return (

    <div className="App" >


      <br></br>
      <br></br>
      <h1>Value of  Counter is: {add}</h1>

      <button type='button' onClick={incrementCounter}>Increase Counter</button>
      <button type='button' onClick={decrementCounter}>Decrease Counter</button>
      <button type='button' onClick={resetCounter}> Reset </button>
      <br></br>
      <br></br>

      {myElement}




    </div>
  );

}
export default App;

