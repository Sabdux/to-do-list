import React from 'react';
import type { Tarefa } from '../../App.tsx';
import './styles.css';
import { useFavorites } from '../contexts/FavoritesContext';

interface TodoItemProps {
  task: Tarefa;
  onToggle: (taskId: number) => void;
}
function Card({ task }: TodoItemProps) {
  const { favoritos, toggleFavorite } = useFavorites();
  const isFavorite = favoritos.some(fav  => fav.id === task.id);
  
  
const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
  return (
    <div className={`todo-item ${task.completo ? 'completed' : ''}`}>
       <button onClick={() => toggleFavorite(task)} className="favorite-btn">
        {isFavorite ? '❤️ Remover' : '🤍 Favoritar'}
      </button>
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