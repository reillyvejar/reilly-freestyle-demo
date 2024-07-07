import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const todoListSlice = /* @__PURE__ */ createSlice({
    name: "todoList",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            /* @__PURE__ */ state.items.push(action.payload);
        },
        toggleCompletion: (state, action) => {
            const item = /* @__PURE__ */ state.items.find((item) => item.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        },
    },
});
export const { addItem, toggleCompletion } = todoListSlice.actions;
export const createTodoListStore = (items) => configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
    },
    preloadedState: {
        todoList: {
            items: items,
        },
    },
});
export const useTodoListSelector = /* @__PURE__ */ useSelector.withTypes();
export const useItems = () => useTodoListSelector((state) => state.todoList.items);
//# sourceMappingURL=todo-list-store.js.map