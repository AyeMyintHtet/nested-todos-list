import { useCallback, useMemo, useRef, useState } from "react";
import { LuCross, LuTrash } from "react-icons/lu";
import { NestedItemType } from "../../router/FixMeNested/useNested";
const NestedItem = ({
  item,
  depth,
  onToggleExpend,
  onCreateChild,
  onRemoveChild,
}: {
  item: NestedItemType;
  depth: number;
  onToggleExpend: (item: NestedItemType) => void;
  onRemoveChild: (item: NestedItemType) => void;
  onCreateChild: (item: NestedItemType, newMessage: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShowInput, setIsShowInput] = useState<boolean>(false);

  const handleExpend = useCallback(() => {
    onToggleExpend(item);
  }, [item, onToggleExpend]);

  const onEnterKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!inputRef.current) return;

      const message = inputRef.current.value?.trim() || "";
      if (!message) return;

      if (e.key === "Enter") {
        onCreateChild(item, message);
        inputRef.current.value = "";
      }
    },
    [item, onCreateChild]
  );

  const isThereChild = useMemo(() => {
    return item.children.length > 0;
  }, [item.children.length]);

  return (
    <div>
      <h1 className="px-1 py-1 mb-1 hover:bg-[#fafafa] flex">
        <span
          className={`w-[24px] h-[24px] flex justify-center items-center mr-1 rounded-md ${
            isThereChild && "hover:bg-[#dfdfdf] cursor-pointer "
          }`}
          onClick={handleExpend}
        >
          {isThereChild ? (item.isExpend ? "—" : "+") : " "}
        </span>
        <span className="flex-1">{item.title} </span>
        <span
          className="inline-block cursor-pointer text-blue-500 mr-1 hover:bg-blue-100 hover:opacity-90 rounded-md w-[24px] h-[24px] flex justify-center items-center"
          onClick={() => {}}
        >
          <LuCross />
        </span>
        <span
          className="inline-block cursor-pointer bg-rose-100 text-rose-500 hover:opacity-90 rounded-md w-[24px] h-[24px] flex justify-center items-center"
          onClick={() => onRemoveChild(item)}
        >
          <LuTrash />
        </span>
      </h1>

      {item.isExpend && (
        <div
          style={{
            paddingLeft: depth * 22,
          }}
        >
          {isThereChild &&
            item.children.map((child) => (
              <NestedItem
                key={child.id}
                item={child}
                depth={depth + 1}
                onToggleExpend={onToggleExpend}
                onCreateChild={onCreateChild}
                onRemoveChild={onRemoveChild}
              />
            ))}
        </div>
      )}

      {isShowInput && (
        <div>
          <div className="flex flex-row justify-center items-center mb-2">
            <span
              className={`w-[24px] h-[24px] flex justify-center items-center mr-1 rounded-md`}
              onClick={handleExpend}
            >
              {" "}
            </span>
            <input
              ref={inputRef}
              type="text"
              className="block border rounded-md outline-none p-2 flex-1"
              onKeyDown={onEnterKey}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default NestedItem;
