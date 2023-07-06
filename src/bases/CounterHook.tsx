import { useCounter } from '../hooks';

const MAXIMUN_COUNT = 10;

export const CounterHook = () => {
  const { counter, counterElement, handleClick } = useCounter();


  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={ counterElement }>{ counter }</h2>

      <button onClick={ handleClick }>
        + 1
      </button>
    </>
  );
}
