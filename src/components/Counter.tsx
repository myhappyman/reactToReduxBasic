import { decrease, increase } from '../modules/counter';

interface ICounter {
  number: number;
  onIncrease: typeof increase;
  onDecrease: typeof decrease;
}

export default function Counter({ number, onIncrease, onDecrease }: ICounter) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => onIncrease(number)}>+1</button>
        <button onClick={() => onDecrease(number)}>-1</button>
      </div>
    </div>
  );
}
