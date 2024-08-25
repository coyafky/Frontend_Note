<template>
  <div>
      <h1>Todos</h1>
      <ul>
          <li v-for="todo in todos" :key="todo.id">
              {{ todo.name }} ({{ todo.quantity }})
              <button @click="deleteTodo(todo.id)">Delete</button>
              <button @click="editTodo(todo)">Edit</button>
          </li>
      </ul>
      <form @submit.prevent="addTodo">
          <input v-model="newTodo.name" placeholder="Todo Name" required />
          <input v-model.number="newTodo.quantity" placeholder="Quantity" required />
          <button type="submit">Add Todo</button>
      </form>
      <div v-if="editingTodo">
          <h2>Edit Todo</h2>
          <form @submit.prevent="updateTodo">
              <input v-model="editingTodo.name" placeholder="Todo Name" required />
              <input v-model.number="editingTodo.quantity" placeholder="Quantity" required />
              <button type="submit">Update Todo</button>
              <button @click="cancelEdit">Cancel</button>
          </form>
      </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
      return {
          todos: [],
          newTodo: {
              name: '',
              quantity: 0,
          },
          editingTodo: null,
      };
  },
  async created() {
      const response = await api.getTodos();
      this.todos = response.data;
  },
  methods: {
      async addTodo() {
          const response = await api.addTodo(this.newTodo);
          this.todos.push(response.data);
          this.newTodo.name = '';
          this.newTodo.quantity = 0;
      },
      async deleteTodo(id) {
          await api.deleteTodo(id);
          this.todos = this.todos.filter(todo => todo.id !== id);
      },
      editTodo(todo) {
          this.editingTodo = { ...todo };
      },
      async updateTodo() {
          const response = await api.updateTodo(this.editingTodo.id, this.editingTodo);
          const index = this.todos.findIndex(todo => todo.id === this.editingTodo.id);
          this.$set(this.todos, index, response.data);
          this.editingTodo = null;
      },
      cancelEdit() {
          this.editingTodo = null;
      },
  },
};
</script>