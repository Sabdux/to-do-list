
import React, { useState } from 'react';
import './styles.css';

interface HeaderProps {
  onAddTask: (taskText: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputText.trim()) {
      onAddTask(inputText);
      setInputText(''); // Limpa o input após adicionar
    }
  };

  return (
    <header className="header">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          className="task-input"
        />
        <button type="submit" className="add-button">Adicionar</button>
      </form>
    </header>
  );
};

export default Header;
