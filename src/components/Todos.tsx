import {
  IChangeInput,
  IInsert,
  IToggle,
  IRemove,
  ITodo,
} from '../modules/todos';

export interface ITodos {
  input: string;
  todos: ITodo[];
  onChangeInput: IChangeInput;
  onInsert: IInsert;
  onToggle: IToggle;
  onRemove: IRemove;
}

interface ITodoItem {
  todo: ITodo;
  onToggle: IToggle;
  onRemove: IRemove;
}

const TodoItem = ({ todo, onToggle, onRemove }: ITodoItem) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default function Todos({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: ITodos) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(''); // 등록 후 input 초기화
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}
