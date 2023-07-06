// React
import { useReducer, useState } from 'react';


interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
};

export const CounterReducer = () => {
  const [ state, dispatch ] = useReducer( reducer, INITIAL_STATE );

  const handleClick = () => {
    setCounter( prev => prev + 1 );
  }

  return (
    <>
      <h1>CounterReducer: { counter }</h1>

      <button onClick={ handleClick }>
        + 1
      </button>
    </>
  );
}
