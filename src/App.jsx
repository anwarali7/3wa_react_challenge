import './App.css'
import { useReducer } from "react";

import PairsReducer, { initialState } from './utils/reducer/PairsReducer.js';

function App() {

  const [state, dispatch] = useReducer(PairsReducer, initialState);

  const addRandomNumber = () => {
    dispatch({ type: 'ADD_RANDOM_NUMBER' });
  }

  const handleGeneratePairs = () => {
    dispatch({ type: 'MAKE_PAIRS' });
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
