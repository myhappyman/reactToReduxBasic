import { createAction, handleActions } from 'redux-actions';

/*
 * Ducks구조로 counter에 대한 액션 타입, 액션 생성 함수, 리듀서를 포함시켜서 작성한다.
 */
const INCREASE = 'couter/INCREASE' as const;
const DECREASE = 'couter/DECREASE' as const;

export const increase = createAction(INCREASE, (num: number) => num);
export const decrease = createAction(DECREASE, (num: number) => num);

type CounterState = {
  number: number;
};

const initialState: CounterState = {
  number: 0,
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const counter = handleActions<CounterState, CounterAction>(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
