import { create } from "zustand"
import { Todo } from "@/types/a-todo"
import { persist } from "zustand/middleware"

interface TodoStore {
    todos: Todo[],
    addTodo: (text: string) => void,
    deleteTodo: (id: string) => void,
    toggleTodo: (id: string) => void,
    updateTodo: (id: string, text: string) => void,
    getTodoStats: () => {
        total: number,
        active: number,
        completed: number
    },

}

export const useTodoStore = create<TodoStore>()(
    persist((set, get) => ({
        todos: [
            // {
            //     id: '1',
            //     text: "Learn Zustand",
            //     completed: false,
            //     createdAt: new Date("2024-01-01"),
            // },
            // {
            //     id: '2',
            //     text: "Learn Zustand",
            //     completed: true,
            //     createdAt: new Date("2024-01-01"),
            // },
        ],

        // Create 
        addTodo: (text: string) => set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: Date.now().toString(),
                    text: text.trim(),
                    completed: false,
                    createdAt: new Date(),
                }
            ]
        })),

        // Delete
        deleteTodo: (id: string) => set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        })),

        // Update toggle
        toggleTodo: (id: string) => set((state) => ({
            todos: state.todos.map(todo =>
                todo.id == id
                    ? { ...todo, completed: !todo.completed } // Update specific todo
                    : todo // Keep the rest of the todos unchanged
            )
        })),

        // Update text
        updateTodo: (id: string, text: string) => set((state) => ({
            todos: state.todos.map(todo =>
                todo.id == id
                    ? { ...todo, text: text.trim() } // Update specific todo
                    : todo // Keep the rest of the todos unchanged
            )
        })),

        // Compute stats
        getTodoStats: () => {
            const { todos } = get();
            return {
                total: todos.length,
                active: todos.filter(todo => !todo.completed).length,
                completed: todos.filter(todo => todo.completed).length,
            }
        }
    }),{name: "todo-storage"})
)