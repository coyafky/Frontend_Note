<template>
    <div>
        <div class="" v-text="student.name">
        
        </div>
        <div v-text="student.desc">

        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
let student = reactive({
    name:"JacK",
    desc :`<h3>甘sir</h3>`

})

</script>

<style lang="scss" scoped>

</style>