import { useState, memo } from "react";
import { Button, Input, Space } from "antd";

const TodoHeader = memo(function TodoHeader({ addNewTodo }) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const clickHandler = () => {
    addNewTodo(newTodoValue);
    setNewTodoValue("");
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        value={newTodoValue}
        onChange={(e) => {
          setNewTodoValue(e.target.value);
        }}
      />
      <Button type="primary" onClick={clickHandler}>
        Add Todo
      </Button>
    </Space.Compact>
  );
});

export default TodoHeader;
