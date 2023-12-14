import './App.css'
// import { useState, useReducer } from "react";
import {useReducer } from "react";

import PairsReducer, { initialState } from './utils/reducer/PairsReducer.js';

function App() {
  // const [numbers, setNumbers] = useState([]);
  // const [message, setMessage] = useState('');
  // const [pairs, setPairs] = useState([]);

  const [state, dispatch] = useReducer(PairsReducer, initialState);

  const addRandomNumber = () => {

    dispatch({ type: 'ADD_RANDOM_NUMBER' });

    // let randomNumber = Math.floor(Math.random() * 30) + 1;
    // if (numbers.length === 30) {
    //   setMessage('The list is full.');
    //   return;
    // }
    // while (numbers.includes(randomNumber) || randomNumber < 1 || randomNumber > 30) {
    //   randomNumber = Math.floor(Math.random() * 30) + 1;
    // }
    // setNumbers([...numbers, randomNumber]);
  }

  const handleGeneratePairs = () => {
    dispatch({ type: 'MAKE_PAIRS' });
    // let pairs = [];
    // let numbersCopy = [...numbers];
    // numbersCopy = shuffle(numbersCopy);
    // while (numbersCopy.length > 0) {
    //   if(numbersCopy.length === 1) {
    //     pairs.push([numbersCopy.shift()]);
    //     break;
    //   }
    //   let firstNumber = numbersCopy.shift();
    //   let secondNumber = numbersCopy.shift();
    //   pairs.push([firstNumber, secondNumber]);
    // }
    // setPairs(pairs);
  }

  return (
    <>
      <h1>Generate pairs</h1>
      <label>Add a random number between 1 and 30 to the list.</label>
      <button type="button" onClick={addRandomNumber}>
        Add
      </button>
      <p>
        List : <span className="numbers-list">{state.numbers.join(', ')}</span>
      </p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        {state.message}
      </p>

      <button type="button" onClick={handleGeneratePairs}>Generate pairs</button>
      <ul className="pairs-list">
        {state.pairs.map((pair, index) => (
          <li key={index}>{pair.join(', ')}</li>
        ))}
      </ul>
    </>
  )
}

export default App
