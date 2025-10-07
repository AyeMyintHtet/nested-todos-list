import { forwardRef } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface TodoInputProps {
  onEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  createTodo: () => void;
}

const TodoInput = forwardRef<HTMLInputElement, TodoInputProps>(
  ({ onEnterKey, createTodo }, ref) => {
    return (
      <div className="flex flex-row justify-center items-center gap-x-[12px]">
        <input
          ref={ref}
          type="text"
          className="input"
          onKeyDown={onEnterKey}
        />
        <button
          className="btn-primary"
          onClick={createTodo}
        >
          <CiCirclePlus className="h-6 w-6" />
        </button>
      </div>
    );
  }
);

export default TodoInput;
