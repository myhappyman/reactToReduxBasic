import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

interface ICounterContainer {
  number: number;
  increase: typeof increase;
  decrease: typeof decrease;
}

const CounterContainer = ({
  number,
  increase,
  decrease,
}: ICounterContainer) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  ({ counter }) => ({
    number: counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
