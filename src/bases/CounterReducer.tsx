// React
import { useReducer, useState } from 'react';


interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 20,
  changes: 30
};

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {
  switch ( action.type ) {
    case 'reset':
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      }
  
    default:
      return state;
  }
}

export const CounterReducer = () => {
  const [ { counter }, dispatch ] = useReducer( counterReducer, INITIAL_STATE );

  const handleClick = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <>
      <h1>CounterReducer: { counter }</h1>

      <button onClick={ handleClick }>
        reset
      </button>
    </>
  );
}
