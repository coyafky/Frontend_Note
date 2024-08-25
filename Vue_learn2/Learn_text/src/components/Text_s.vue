<template>
    <div>
        <p>{{account}}</p>
        <button @click="changeAccount">
            点击我更改账号
        </button>
        <p>
            学生信息：{{student.name}}-{{student.age}}
        </p>
        <button @click="student.age++">点击我更改学生年龄</button>
    </div>
</template>

<script>
    export default {
        data:()=>({
            account:'Abc',
            student:{
                name:'张三',
                age:18
            }
        }),
        methods:{
            changeAccount(){
                this.account+= '123'
            },
            changeAge(){
                this.student.age += 1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>