<template>
    <div>
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a todo">
        <button @click="addTodo">+</button>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.completed">
                <span>{{ todo.text }}</span>
                <button @click="removeTodo(todo)">X</button>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                // 创建一个新的待办事项对象
                const newTodo = {
                    text: this.newTodo,
                    completed: false
                }

                // 将新待办事项添加到 todos 数组中
                this.todos.push(newTodo)

                // 清空 newTodo 输入框
                this.newTodo = ''
            }
        },
        removeTodo(todo) {
            // 从 todos 数组中过滤掉已完成的待办事项
            this.todos = this.todos.filter(t => t.id !== todo.id)
        }


    }
}
</script>