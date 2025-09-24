import { createContext, useState, useContext, type ReactNode } from 'react';
import TodoItem  from '../TodoItem/index.tsx';

interface FavoritesContextType {
  favoritos: TodoItem[];
  addFavorito: (item: TodoItem) => void;
  removeFavorito: (item: TodoItem) => void;
  isFavorito: (itemId: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<TodoItem[]>([]);
sa
  const addFavorito = (item: TodoItem) => {
    if (!favoritos.some(fav => fav.id === item.id)) {
      setFavoritos((prevFavoritos) => [...prevFavoritos, item]);
    }
  };

  const removeFavorito = (item: TodoItem) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((fav) => fav.id !== item.id));
  };

  const isFavorito = (itemId: string) => {
    return favoritos.some((fav) => fav.id === itemId);
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, addFavorito, removeFavorito, isFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}