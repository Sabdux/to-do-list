# Projeto To-Do List com React, TypeScript e Vite

## Sobre o Projeto

Esta é uma aplicação simples de "Lista de Tarefas" (To-Do List) desenvolvida como parte de uma atividade prática. O objetivo é permitir que o usuário adicione, visualize e marque tarefas como concluídas. A aplicação foi criada do zero para praticar conceitos fundamentais do ecossistema React moderno.

Funcionalidades:
- Adicionar novas tarefas a uma lista.
- Visualizar todas as tarefas cadastradas.
- Marcar e desmarcar uma tarefa como concluída, com um efeito visual de checkbox.

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
- **Vite:** Ferramenta de build moderna que oferece um ambiente de desenvolvimento rápido e otimizado.
- **CSS Modules/CSS Padrão:** Para estilização dos componentes de forma organizada.

## Estrutura de Componentes

A aplicação foi dividida em componentes reutilizáveis para manter o código organizado e escalável.

-   **`App.tsx`**: É o componente principal que orquestra toda a aplicação. Ele gerencia o estado da lista de tarefas e passa os dados e funções necessários para os componentes filhos via `props`.

-   **`Header/index.tsx`**: Responsável por exibir o título da aplicação e o formulário para adicionar uma nova tarefa. Ele contém um `input` para o texto da tarefa e um `button` para submissão. Quando o formulário é submetido, ele chama uma função (`onAddTask`) recebida via `props` do componente `App`.

-   **`TodoList/index.tsx`**: Este componente recebe a lista de tarefas (`tasks`) via `props` e é responsável por renderizar cada item da lista. Ele itera sobre o array de tarefas e, para cada tarefa, renderiza um componente `TodoItem`.

-   **`TodoItem/index.tsx`**: Representa uma única tarefa na lista. Ele exibe o texto da tarefa e um `checkbox` para marcar a tarefa como concluída. O estado visual (riscado ou não) é controlado por uma classe CSS condicional baseada na propriedade `completed` da tarefa. A interação com o `checkbox` dispara a função `onToggle` (recebida via `props`) para atualizar o estado no componente `App`.

## Gerenciamento de Estado (useState)

O estado da aplicação é gerenciado utilizando o Hook `useState` do React.

1.  **Estado da Lista de Tarefas (`tasks`)**:
    O estado mais importante da aplicação é o array que armazena todas as tarefas. Ele é inicializado como um array vazio no componente `App`.

    ```typescript
    // Em App.tsx
    import { useState } from 'react';
    import type { Tarefa } from './types';

    const [tasks, setTasks] = useState<Tarefa[]>([]);
    ```

    A função `setTasks` é usada para adicionar novas tarefas ou para atualizar o estado de uma tarefa existente (marcar como concluída).

2.  **Estado do Input de Nova Tarefa (`inputText`)**:
    No componente `Header`, um estado local é utilizado para controlar o valor do campo de texto onde o usuário digita a nova tarefa.

    ```typescript
    // Em Header/index.tsx
    import { useState } from 'react';

    const [inputText, setInputText] = useState('');

    // ...
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Adicione uma nova tarefa"
    />
    ```

## Tipagem com TypeScript

O TypeScript foi utilizado para garantir a segurança dos tipos em toda a aplicação. A principal estrutura de dados, a tarefa, foi tipada usando uma `interface`.

**Interface `Tarefa`**:
Esta interface define o formato de um objeto de tarefa, garantindo que cada tarefa tenha um `id`, um `texto` e um status `completo`.

```typescript
// Em App.tsx
export interface Tarefa {
  id: number;
  texto: string;
  completo: boolean;
}
```

Essa interface é então utilizada para tipar os estados e as `props` dos componentes, prevenindo erros e melhorando a legibilidade do código.

**Exemplo de uso em `props`**:

```typescript
// Em TodoList/index.tsx
interface TodoListProps {
  tasks: Tarefa[]; // Usando a interface para tipar o array
  onToggleTask: (taskId: number) => void;
}
```

## Efeitos Colaterais (useEffect)

O Hook `useEffect` foi utilizado para observar mudanças na lista de tarefas e executar uma ação secundária (um "efeito colateral").

Neste projeto, ele foi usado para exibir uma mensagem no console do navegador toda vez que a lista de tarefas (`tasks`) é modificada (seja por adição ou por alteração do status de conclusão).

```typescript
// Em App.tsx
import { useEffect } from 'react';

useEffect(() => {
  // Este código será executado sempre que o estado 'tasks' for atualizado.
  console.log('A lista de tarefas foi atualizada:', tasks);
}, [tasks]); // O array de dependências garante que o efeito só rode quando 'tasks' mudar.
```

Isso é útil para depuração e para entender o fluxo de dados e atualizações de estado na aplicação.

## Como Executar o Projeto

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd todo-list-app
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal)