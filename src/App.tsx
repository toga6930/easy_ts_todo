import "./styles.css";
import React, { ChangeEvent, useState } from "react";
import { ITask } from "./interface";
import TodoList from "./TodoList";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    const newTask = { itask: task };
    setTodo([...todo, newTask]);
    setTask("");
  };
  const completeTask = (taskDelte: string) => {
    setTodo(
      todo.filter((task) => {
        return task.itask !== taskDelte;
      })
    );
  };
  const editTask = (taskEdit: string) => {
    const newTask = prompt("Edit", taskEdit);
    if (newTask !== null) {
      setTodo(
        todo.map((task) => {
          if (task.itask === taskEdit) {
            return { ...task, itask: newTask };
          } else {
            return task;
          }
        })
      );
    }
  };
  return (
    <div className="App">
      <div className="container">
        <input type="text" value={task} onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todolist">
        {todo.map((task: ITask) => {
          return (
            <TodoList
              task={task}
              completeTask={completeTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </div>
  );
}
