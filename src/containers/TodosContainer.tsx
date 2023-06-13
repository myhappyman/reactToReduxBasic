import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {
  changeInput,
  insert,
  toggle,
  remove,
  IChangeInput,
  IInsert,
  IToggle,
  IRemove,
  ITodo,
} from '../modules/todos';

interface ITodosContainer {
  input: string;
  todos: ITodo[];
  changeInput: IChangeInput;
  insert: IInsert;
  toggle: IToggle;
  remove: IRemove;
}

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: ITodosContainer) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
