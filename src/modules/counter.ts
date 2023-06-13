/*
 * Ducks구조로 counter에 대한 액션 타입, 액션 생성 함수, 리듀서를 포함시켜서 작성한다.
 */
const INCREASE = 'couter/INCREASE' as const;
const DECREASE = 'couter/DECREASE' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type CounterState = {
  number: number;
};

const initialState: CounterState = {
  number: 0,
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
