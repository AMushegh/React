import { memo } from "react";
import { Flex, List, Tag, Typography } from "antd";

const Todos = memo(function Todos({ todoList, loading }) {
  return (
    <List
      bordered
      loading={loading}
      dataSource={todoList}
      renderItem={(item) => (
        <List.Item>
          <Flex justify="space-between" style={{ width: "100%" }}>
            <Flex gap="small">
              <Typography.Text strong>{item.id}</Typography.Text>
              {item.title}
            </Flex>
            <Tag color={item.completed ? "green" : "red"}>
              {item.completed ? "Completed" : "Not Completed"}
            </Tag>
          </Flex>
        </List.Item>
      )}
    />
  );
});

export default Todos;
