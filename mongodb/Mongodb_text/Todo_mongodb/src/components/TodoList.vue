<template>
    <div>
      <h1>Todo List</h1>
      <input v-model="newTodo.title" placeholder="Add new todo" />
      <button @click="addTodo">Add</button>
      <ul>
        <li v-for="todo in todos" :key="todo._id">
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <button @click="toggleTodo(todo._id)">Toggle</button>
          <button @click="deleteTodo(todo._id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        todos: [],
        newTodo: { title: '', completed: false }
      };
    },
    methods: {
      async fetchTodos() {
        const response = await axios.get('http://localhost:3000/todos');
        this.todos = response.data;
      },
      async addTodo() {
        const response = await axios.post('http://localhost:3000/todos', this.newTodo);
        this.todos.push(response.data);
        this.newTodo.title = '';
      },
      async toggleTodo(id) {
        const todo = this.todos.find(todo => todo._id === id);
        const updatedTodo = await axios.put(`http://localhost:3000/todos/${id}`, {
          completed: !todo.completed
        });
        todo.completed = updatedTodo.data.completed;
      },
      async deleteTodo(id) {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        this.todos = this.todos.filter(todo => todo._id !== id);
      }
    },
    created() {
      this.fetchTodos();
    }
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>