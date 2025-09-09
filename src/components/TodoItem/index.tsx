import React from 'react';
import type { Tarefa } from '../../App.tsx';
import './styles.css';

interface TodoItemProps {
  task: Tarefa;
  onToggle: (taskId: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
  return (
    <div className={`todo-item ${task.completo ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completo}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.texto}</span>
    </div>
  );
};

export default TodoItem;