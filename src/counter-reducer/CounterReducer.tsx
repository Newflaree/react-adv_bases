// React
import { useReducer, useState } from 'react';
// Actions
import * as CounterActions from './actions';
// Interfaces
import { CounterState } from './interfaces';
// State
import { counterReducer } from './state';


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
};

export const CounterReducer = () => {
  const [ counterState, dispatch ] = useReducer( counterReducer, INITIAL_STATE );

  const handleReset = () => {
    dispatch( CounterActions.doReset() )
  }

  const handleIncreaseBy = ( value: number ) => {
    dispatch( CounterActions.doIncreaseBy( value ) );
  }

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
      <pre>{ JSON.stringify( counterState, null, 2 ) }</pre>

      <button onClick={ () => handleIncreaseBy( 1 ) }>
        +1 
      </button>
      <button onClick={ () => handleIncreaseBy( 5 ) }>
        +5
      </button>
      <button onClick={ () => handleIncreaseBy( 10 ) }>
        +10
      </button>
      <button onClick={ handleReset }>
        reset
      </button>
    </>
  );
}
