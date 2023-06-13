export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export const CHANGE_INPUT = 'todos/CHANGE_INPUT' as const;
export const INSERT = 'todos/INSERT' as const;
export const TOGGLE = 'todos/TOGGLE' as const;
export const REMOVE = 'todos/REMOVE' as const;

export interface IChangeInput {
  (text: string): { type: typeof CHANGE_INPUT; input: string };
}
export interface IInsert {
  (text: string): { type: typeof INSERT; todo: ITodo };
}
export interface IToggle {
  (id: number): { type: typeof TOGGLE; id: number };
}

export interface IRemove {
  (id: number): { type: typeof REMOVE; id: number };
}

export const changeInput = (input: string) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id: number) => ({
  type: TOGGLE,
  id,
});

export const remove = (id: number) => ({
  type: REMOVE,
  id,
});

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

type TodosActionTypes =
  | typeof CHANGE_INPUT
  | typeof INSERT
  | typeof TOGGLE
  | typeof REMOVE;

interface IAction {
  type: TodosActionTypes;
  input: string;
  todo: ITodo;
  id: number;
}
function todos(state = initialState, action: IAction) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
