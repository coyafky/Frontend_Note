<template>
    <div>
        <p>将用户的值转成数值，懒更新</p>
        <input type="text" name="" id="" v-model.lazy.number="age">
    <hr>
    <p>去掉空白字符</p>
    <input type="text" v-model.trim="nickname">
    </div>
</template>

<script>
   import {ref } from 'vue'
   let age = ref(18)
   let  nickname = ref('张三');

</script>

<style lang="scss" scoped>

</style>