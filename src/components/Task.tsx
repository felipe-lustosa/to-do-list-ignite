import React, { useState } from "react";

import { PlusCircle, Trash } from "phosphor-react";
import uuid from "react-uuid";

import styles from "./Task.module.css";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  text: string;
  checked: boolean;
}

const Task = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((prevState) => [...prevState, { id: uuid(), text: newTaskText, checked: false }]);
    setNewTaskText("");
  };

  const onTaskDelete = (id: string) => {
    const newTasks = tasks.filter(function (task) {
      return task.id != id;
    });
    setTasks(newTasks);
  };

  const onTaskCheck = (id: string) => {
    const newTasks = tasks.filter(function (task) {
      if (task.id == id) task.checked = !task.checked;
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className={styles.task}>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        <input required value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} placeholder="Adicione uma nova tarefa" />
        <button type="submit" className={styles.iconButton}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.taskBody}>
        <div className={styles.taskHeader}>
          <p className={styles.textBlue}>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p className={styles.textPurple}>
            Concluídas{" "}
            <span>
              {tasks.filter(function (task) {
                return task.checked;
              }).length +
                " de " +
                tasks.length}
            </span>
          </p>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => {
            return <TaskItem key={task.id} id={task.id} text={task.text} checked={task.checked} handleTaskDelete={onTaskDelete} handleCheckTask={onTaskCheck} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
