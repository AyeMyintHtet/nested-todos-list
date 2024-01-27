import { forwardRef } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface TodoInputProps {
  onEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  createTodo: () => void;
}

const TodoInput = forwardRef<HTMLInputElement, TodoInputProps>(
  ({ onEnterKey, createTodo }, ref) => {
    return (
      <div className="flex flex-row justify-center items-center gap-x-[14px]">
        <input
          ref={ref}
          type="text"
          className="block border-b outline-none p-2 flex-1"
          onKeyDown={onEnterKey}
        />
        <button
          className="block hover:bg-[#efefef] outline-none p-2 rounded-md"
          onClick={createTodo}
        >
          <CiCirclePlus className="h-6 w-6" />
        </button>
      </div>
    );
  }
);

export default TodoInput;
