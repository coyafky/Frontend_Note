<template>
    <div>
        这个是一个div元素{{ student.name }}
    </div>
</template>

<script setup>
import { reactive } from 'vue'
let student = reactive({
    name :"coya";
    desc :"good"
})
</script>

<style lang="scss" scoped>

</style>