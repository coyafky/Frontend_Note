import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    getTodos() {
        return apiClient.get('/todos');
    },
    addTodo(todo) {
        return apiClient.post('/todos', todo);
    },
    updateTodo(id, todo) {
        return apiClient.put(`/todos/${id}`, todo);
    },
    deleteTodo(id) {
        return apiClient.delete(`/todos/${id}`);
    },
};