<template>
    <div>
        <h1>User List</h1>
        <router-link to="/add">Add User</router-link>
        <ul>
            <li v-for="user in users" :key="user._id">
                {{ user.name }} - {{ user.email }}
                <button @click="editUser(user._id)">Edit</button>
                <button @click="deleteUser(user._id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            const response = await axios.get('http://localhost:3000/users');
            this.users = response.data;
        },
        editUser(id) {
            this.$router.push(`/edit/${id}`);
        },
        async deleteUser(id) {
            try {
                await axios.delete(`http://localhost:3000/users/${id}`);
                this.fetchUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    }
};
</script>