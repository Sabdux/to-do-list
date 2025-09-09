import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList/index.tsx';
import './App.css';

export interface Tarefa {
  id: number;
  texto: string;
  completo: boolean;
}

const App: React.FC  = () => {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState<Tarefa[]>([]);

  // useEffect para monitorar mudanças na lista de tarefas
  useEffect(() => {
    console.log('A lista de tarefas foi atualizada:', tasks);
  }, [tasks]);

  // Função para adicionar uma nova tarefa
  const addTask = (taskText: string) => {
    const newTask: Tarefa = {
      id: Date.now(), // ID único baseado no timestamp
      texto: taskText,
      completo: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Função para marcar/desmarcar uma tarefa como concluída
  const toggleTask = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completo: !task.completo } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header onAddTask={addTask} />
      <TodoList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
};

export default App;