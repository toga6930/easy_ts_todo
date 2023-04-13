import { ITask } from "./interface";

type Props = {
  task: ITask;
  completeTask(taskDelete: string): void;
  editTask(taskEdit: string): void;
};

const TodoList = ({ task, completeTask, editTask }: Props) => {
  return (
    <div className="task">
      <div className="task-content">
        <span>{task.itask}</span>
        <button onClick={() => editTask(task.itask)}>Edit</button>
        <button onClick={() => completeTask(task.itask)}>Del</button>
      </div>
    </div>
  );
};
export default TodoList;
