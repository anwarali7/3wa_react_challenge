import shuffle from '../shuffle.js';

export const initialState = {
  numbers: [],
  pairs: [],
  message: '',
}

const PairsReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_RANDOM_NUMBER': {
      let randomNumber = Math.floor(Math.random() * 30) + 1;
      if (state.numbers.length >= 30) {
        return {
          ...state,
          message: 'The list is full.'
        }
      }
      while (state.numbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 30) + 1;
      }
      return {
        ...state,
        numbers: state.numbers.concat(randomNumber),
        message: ''
      }
    }

    case 'MAKE_PAIRS': {
      let pairs = [];
      let numbersCopy = [...state.numbers];
      numbersCopy = shuffle(numbersCopy);
      while (numbersCopy.length > 0) {
        if (numbersCopy.length === 1) {
          pairs.push([numbersCopy.shift()]);
          break;
        }
        let firstNumber = numbersCopy.shift();
        let secondNumber = numbersCopy.shift();
        pairs.push([firstNumber, secondNumber]);
      }
      return {
        ...state,
        pairs: pairs,
      }
    }

    default:
      return state
  }
}

export default PairsReducer;