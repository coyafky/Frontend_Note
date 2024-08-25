
<template>

    <input type="text" v-model="inputText">
    <hr>
    
    <textarea v-model="message"></textarea>
    <hr>
    
    <input type="checkbox" v-model="open">
    
    <hr>
    
    <input type="checkbox" true-value="确定" false-value="不确定" v-model="determine">
    
    <hr>
    <input type="checkbox" v-model="likes" value="篮球">
    <input type="checkbox" v-model="likes" value="足球">
    <input type="checkbox" v-model="likes" value="乒乓球">
    
    <hr>
    
    <input type="radio" v-model="sex" value="man">男
    <input type="radio" v-model="sex" value="woman">女
    
    <hr>
    <select v-model="level">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    
    </select>
    
    
    <hr>
    去过的城市
    <select v-model="city" multiple>
    
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
        
    </select>
</template>
<script setup>



    // 引入 ref 函数，来声明响应式对象
    import { ref } from 'vue'
     let inputText = ref('ABC')
     let message = ref('你好啊')
     let open = ref (true)
     let  determine = ref('不确定');
     let likes = ref (['篮球', '足球', '乒乓球'])
     let sex = ref('woman');
     let level = ref('B');
     let city = ref('北京');

</script>




<style lang="scss" scoped>

</style>