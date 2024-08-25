<script setup>

import { ref } from 'vue'

let isShow = ref(false)  // 是否显示
let age = ref(20)  // 年龄
let week = ref(3)  // 周几

</script>


<template>

    是否显示：<input type="checkbox" v-model="isShow">
    <!-- 
        v-if：指令表达式为真时才会渲染该元素 
        为true时会创建该元素，为false时会销毁该元素
    -->
    <h3 v-if="isShow">这是一个普通的标题标签</h3>

    <hr>

    年龄: <input type="range" min="0" max="100" v-model="age"> {{ age }}
    <!-- 
        v-if：可以配合 v-else-if 和 v-else 来搭建多重判断条件，他们中间不要参杂无关紧要的元素 
    -->
    <h1 v-if="age < 18">未成年</h1>
    <!-- <span>无关紧要的元素</span> -->
    <h2 v-else-if="age < 35">青年</h2>
    <h3 v-else-if="age < 50">中年</h3>
    <h4 v-else>老年</h4>

    <hr>

    周几: <input type="range" min="1" max="7" v-model="week"> {{ week }}

    <!-- v-if：可以配合 template 元素使用，最后渲染的结果并不会包含这个 <template>元素 -->
    <template v-if="week == 1 || week == 3 || week == 5 || week == 7">
        <h1>可以游泳</h1>
    </template>
    <template v-else>
        <h1>不可以游泳</h1>
    </template>

</template>