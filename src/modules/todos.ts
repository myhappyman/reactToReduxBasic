import { createAction, handleActions, Action } from 'redux-actions';

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export const CHANGE_INPUT = 'todos/CHANGE_INPUT' as const;
export const INSERT = 'todos/INSERT' as const;
export const TOGGLE = 'todos/TOGGLE' as const;
export const REMOVE = 'todos/REMOVE' as const;

export const changeInput = createAction(CHANGE_INPUT, (input: string) => input);
let id = 3;
export const insert = createAction(INSERT, (text: string) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id: number) => id);
export const remove = createAction(REMOVE, (id: number) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

type TodosState = {
  todos: ITodo[];
};

const todos = handleActions<TodosState, any>(
  {
    [CHANGE_INPUT]: (
      state,
      { payload: input }: { payload: Action<string> },
    ) => ({
      ...state,
      input: input,
    }),
    [INSERT]: (state, { payload: todo }: { payload: ITodo }) => ({
      ...state,
      todos: [...state.todos, todo],
    }),
    [TOGGLE]: (state, { payload: id }: { payload: number }) => ({
      ...state,
      todos: state.todos.map((todo: ITodo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }: { payload: number }) => ({
      ...state,
      todos: state.todos.filter((todo: ITodo) => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
