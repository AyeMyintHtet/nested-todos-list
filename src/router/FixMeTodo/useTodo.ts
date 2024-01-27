import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nanoid } from "nanoid";

export type TodoType = {
  id: string;
  done: boolean;
  task?: string;
};

const useFixMeA = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<TodoType[]>([]);

  // Creating New Task
  const createTodo = useCallback(() => {
    const id = nanoid();
    // Fix code here
    const obj: TodoType = { id, task: inputRef.current?.value, done: false };
    setTodo((prevState) => [...prevState, obj])
  }, []);

  // Updating Task
  const updateTask = useCallback((taskId: string, taskMessage: string) => {
    setTodo((prev) =>
      prev.reduce((cur, next) => {
        // Fix code her
        return [...cur, next.id === taskId ? { ...next, task: taskMessage } : next];
      }, [] as TodoType[])
    );
  }, []);

  // Toggling the task to done (or) undone
  const toggleDone = useCallback((task: TodoType) => {
    setTodo((prev) =>
      prev.reduce((cur, next) => {
        // Fix code here
        return [...cur, next.id === task.id ? { ...next, done: !next.done } : next];
      }, [] as TodoType[])
    );
  }, []);

  // Removing From Todo List
  const removeTask = useCallback((task: TodoType) => {
    // Fix code here
    setTodo((prev) => prev.filter((item) => item.id !== task.id));
  }, []);

  // Showing the finished list
  const doneList = useMemo<TodoType[]>(() => todo.filter((task) => task.done), [todo]);

  // Showing the todo list
  const notDoneList = useMemo<TodoType[]>(() => todo.filter((task) => !task.done), [todo]);

  // When Creating New Todo by Enter Keypress
  const onEnterKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") createTodo();
    },
    [createTodo]
  );

  // When we enter screen, focus input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return {
    inputRef,
    doneList,
    notDoneList,
    toggleDone,
    removeTask,
    createTodo,
    updateTask,
    onEnterKey,
  };
};
export default useFixMeA;
