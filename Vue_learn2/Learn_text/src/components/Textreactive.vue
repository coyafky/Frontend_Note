<!-- <template>
  <hr>
    <h1>账号：{{ account }}</h1>
    <button @click="changeAccount">点我更改账号</button>

    <hr>
    <h1>员工：{{ emp }}</h1>
    <button @click="changeEmp()">点我更改员工薪资</button>
</template>

<script setup>

import { reactive } from 'vue';
let  account = reactive('Abc')
function changeAccount() {
    account.value = '123'
    console.log(account.value)
}

let emp = reactive({
  name :"jack",
  salary :7000  
})

function changeEmp() {
    emp.name = "tom";
    emp.salary = 8000;
    console.log(emp.name,emp.salary)
}
</script>

<style lang="scss" scoped>

</style> -->