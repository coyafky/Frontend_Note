// components/UserForm.vue
<template>
    <div>
        <h1>{{ isEdit ? 'Edit User' : 'Add User' }}</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="user.name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="user.email" required>
            </div>
            <button type="submit">{{ isEdit ? 'Update' : 'Add' }}</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                name: '',
                email: ''
            },
            isEdit: false
        };
    },
    created() {
        const { id } = this.$route.params;
        if (id) {
            this.isEdit = true;
            this.fetchUser(id);
        }
    },
    methods: {
        async fetchUser(id) {
            try {
                const response = await axios.get(`http://localhost:3000/users/${id}`);
                this.user = response.data;
            } catch (error) {
                console.error('Error fetching user:', error);
                this.$router.push('/');
            }
        },

        async submitForm() {
            try {
                if (this.isEdit) {
                    if (!this.user._id) {
                        console.error('User ID is missing');
                        return this.$router.push('/');
                    }
                    const response = await axios.put(`http://localhost:3000/users/${this.user._id}`, this.user);
                    console.log('Update response:', response);
                } else {
                    const response = await axios.post('http://localhost:3000/users', this.user);
                    console.log('Create response:', response);
                }
                this.$router.push('/');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }
};
</script>