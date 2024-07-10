import { useCallback, useEffect, useMemo, useState } from "react";
import Todos from "../Todos/Todos";
import axios from "axios";
import { Flex, Select } from "antd";
import TodoHeader from "../Todos/TodoHeader";

const MainContent = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState();

  useEffect(function fetchTodos() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addNewTodo = useCallback((title) => {
    const newTodo = {
      userId: 100,
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filterType) {
        if (filterType === "completed" && todo.completed) {
          return true;
        }

        if (filterType === "incomplete" && !todo.completed) {
          return true;
        }

        return false;
      }

      return true;
    });
  }, [filterType, todos]);

  return (
    <Flex vertical gap="large">
      <Flex gap="small" vertical>
        <TodoHeader addNewTodo={addNewTodo} />
        <Select
          placeholder="Select Filter"
          onChange={(v) => setFilterType(v)}
          style={{ width: 200 }}
          allowClear
          options={[
            { value: "completed", label: "Completed" },
            { value: "incomplete", label: "Not Completed" },
          ]}
        />
      </Flex>
      <Todos todoList={filteredTodos} loading={loading} />
    </Flex>
  );
};

export default MainContent;
