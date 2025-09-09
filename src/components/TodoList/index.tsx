import React from 'react';
import TodoItem from '../TodoItem';
import type { Tarefa } from '../../App.tsx';
import './styles.css';

interface TodoListProps {
  tasks: Tarefa[];
  onToggleTask: (taskId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleTask }) => {
  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TodoItem key={task.id} task={task} onToggle={onToggleTask} />
        ))
      ) : (
        <p className="empty-message">Nenhuma tarefa na lista.</p>
      )}
    </div>
  );
};

export default TodoList;