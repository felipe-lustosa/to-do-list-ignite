import { CheckCircle, Circle, Trash } from "phosphor-react";
import React from "react";

import styles from "./TaskItem.module.css";

type Props = {
  id: string;
  text: string;
  checked: boolean;
  handleTaskDelete: (text: string) => void;
  handleCheckTask: (text: string) => void;
};

const TaskItem = ({ id, text, checked, handleTaskDelete, handleCheckTask }: Props) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.field}>
        {/* <input type={"checkbox"} checked={checked} onChange={() => handleCheckTask(text)} className={styles.checkbox} /> */}
        {checked ? <CheckCircle onClick={() => handleCheckTask(id)} size={16} /> : <Circle onClick={() => handleCheckTask(id)} size={16} />}
        <p>{text}</p>
      </div>
      <div className={styles.delete} onClick={() => handleTaskDelete(id)}>
        <Trash size={24} />
      </div>
    </div>
  );
};

export default TaskItem;
