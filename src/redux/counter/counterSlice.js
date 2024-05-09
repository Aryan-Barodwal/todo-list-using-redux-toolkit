import { createSlice, nanoid } from '@reduxjs/toolkit'



const initialState = {
    name: "aryan barodwal",
    todos: [{ id: 1, text: "hello world", completed: false }],
}

export const counterSlice = createSlice({
    name: 'todo', //this name is nothing!!!
    initialState,

    reducers: {
        addtodo: (state, action) => {
            if (state.todos.length > 3) {
                alert("Maximum todos limit reached. Cannot add more todos to add more todos you have to delete todos")

            } else {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                    completed: false,
                }
                state.todos.push(todo);
            }
        },
        removetodo: (state, action) => {  //action:- dispatch an action.
            //payload :- dispatch the action with data.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        deletetodo: (state, action) => {
            const todoIdToDelete = action.payload;
            const indexToDelete = state.todos.findIndex(todo => todo.id === todoIdToDelete);

            if (indexToDelete !== -1) {
                state.todos.splice(indexToDelete, 1);
            }
        },
        deleteall: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id === action.payload);
        },
        addcheckboxclass: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed // Toggle the completed status
                    };
            
                }
                return todo;

            })
        }
    }
})

export const { addtodo, removetodo, deletetodo, addcheckboxclass, deleteall } = counterSlice.actions

export default counterSlice.reducer  




