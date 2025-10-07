import Container from "../../components/Container";
import TodoInput from "../../components/Todo/TodoInput";
import TodoItem from "../../components/Todo/TodoItem";
import useTodo from "./useTodo";
const FixMeTodo = () => {
  const {
    notDoneList,
    doneList,
    inputRef,
    createTodo,
    onEnterKey,
    updateTask,
    toggleDone,
    removeTask,
  } = useTodo();
  console.log('notDoneList', notDoneList)
  return (
    <Container>
      <h2 className="mb-4 text-center">Todo </h2>

      <TodoInput
        ref={inputRef}
        onEnterKey={onEnterKey}
        createTodo={createTodo}
      />

      {notDoneList.length >= 1 && (
        <h2 className="my-5 text-center"> Todo List ({notDoneList.length})</h2>
      )}
      <ul>
        {notDoneList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            toggleDone={toggleDone}
            updateTask={updateTask}
            removeTask={removeTask}
          />
        ))}
      </ul>

      {doneList.length >= 1 && (
        <h2 className="my-5 text-center"> Done List ({doneList.length})</h2>
      )}
      <ul>
        {doneList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            toggleDone={toggleDone}
            updateTask={updateTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </Container>
  );
};
export default FixMeTodo;
