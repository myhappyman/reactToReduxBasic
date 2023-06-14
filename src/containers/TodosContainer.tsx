import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove, ITodo } from '../modules/todos';

interface ITodosContainer {
  input: string;
  todos: ITodo[];
  changeInput: typeof changeInput;
  insert: typeof insert;
  toggle: typeof toggle;
  remove: typeof remove;
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
