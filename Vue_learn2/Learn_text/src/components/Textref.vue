<script setup>

    // 引入 ref 函数，来声明响应式对象
    import { ref } from 'vue'
    
    // 使用 ref 函数来声明原始类型的数据源，具备响应式
    let account = ref('Abc')

    // 更改账号，控制台查看最新值
    function changeAccount() {
        // 通过 ref 函数声明的响应式数据，需要使用 .value 来获取数据的值
        account.value += '='
        console.log(account)
    }

    // 使用 ref 函数来声明对象类型的数据源：具备响应式
    let emp = ref({
        salary: 7000,
        name: 'Jack'
    })
    
    // 更改员工薪资，控制台查看最新值
    function changeEmpSalary() {
        // 通过 ref 函数声明的响应式数据，需要使用 .value 来获取数据的值
        emp.value.salary += 100
        console.log(emp)
    }
</script>

<template>
  
    <h1>账号：{{ account }}</h1>
    <button @click="changeAccount">点我更改账号</button>

    <hr>

    <h1>员工：{{ emp }}</h1>
    <button @click="changeEmpSalary">点我更改员工薪资</button>

</template>