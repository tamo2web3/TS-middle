import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Text } from "./Text";
import { Todo } from "./Todo";
import { UserProfile } from "./UserProfile";
import { TodoType } from "./types/todo";
import { User } from "./types/user";

const user: User = {
  name: "保",
  hobbies: ["ジムトレーニング", "インテリア"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickfetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickfetchData}>データ取得</button>
      <Text color="red" fontSize="16px" />
      <UserProfile user={user} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
