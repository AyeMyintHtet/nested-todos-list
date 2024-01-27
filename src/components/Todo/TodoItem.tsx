import { CiCircleCheck, CiCircleMinus, CiSquareRemove } from "react-icons/ci";
import { TodoType } from "../../router/FixMeTodo/useTodo";
const TodoItem = ({
  item,
  toggleDone,
  updateTask,
  removeTask,
}: {
  item: TodoType;
  toggleDone: (item: TodoType) => void;
  removeTask: (item: TodoType) => void;
  updateTask: (id: string, task: string) => void;
}) => {
  return (
    <li className="flex justify-center items-center">
      {item.done ? (
        <CiCircleCheck
          className="h-6 w-6 cursor-pointer text-green-500 hover:text-rose-500"
          onClick={() => toggleDone(item)}
        />
      ) : (
        <CiCircleMinus
          className="h-6 w-6 cursor-pointer hover:text-green-500"
          onClick={() => toggleDone(item)}
        />
      )}

      <input
        type="text"
        className={`block outline-none p-2 flex-1 ${item.done && "line-through"}`}
        onChange={(e) => updateTask(item.id, e.target.value)}
        value={item.task}
      />
      <CiSquareRemove
        className="h-6 w-6 cursor-pointer text-rose-600"
        onClick={() => removeTask(item)}
      />
    </li>
  );
};
export default TodoItem;
