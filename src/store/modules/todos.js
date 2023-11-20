import axios from 'axios';

const state= {
    todos: []
};

const getters= {
    allTodos: state => state.todos
};

const mutations= {
    fetchTodos(state, todos){
        state.todos = todos;
    },
    addTodo(state, todo){
        state.todos.unshift(todo);
    },
    deleteTodo(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodo(state, updTodo){
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
    }
};

const actions= {
    async fetchTodos({commit}){
        await axios.get('https://jsonplaceholder.typicode.com/todos').
        then(response => {
            commit('fetchTodos', response.data)
        });
    },
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('addTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id)
    },
    async filterTodos({commit}, e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('fetchTodos', response.data)
    },
    async updateTodo({commit}, todo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('updateTodo', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}