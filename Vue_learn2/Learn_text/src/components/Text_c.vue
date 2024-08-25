
<template>
    <h1>账号：{{ account }}</h1>
    <button @click="changeAccount">点我更改账号</button>

    <hr>
    <h1>员工：{{ emp }}</h1>
    <button @click="changeSalary">点我更改薪资</button>

</template>

<script setup>
    let  account = 123
    function changeAccount(){
        account+=1;
        console.log(account);

    }
    let emp = {
        salary: 1000,
        name:'annie'
    }
    function changeSalary(){
        emp.salary+=100;
        console.log(emp.salary);
    }
</script>

<style lang="scss" scoped>

</style>