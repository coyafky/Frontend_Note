<script>
    export default{
        //数据存储到data中 model
        data: () => ({
            account: 'Abc'
        }),
        // 方法节点

        methods : {
            changeAccount(){
                this.account+= '='
            }
        }
    }

</script>
<!-- 视图区域（view） -->
<template>
    <!-- 使用数据源得 DOM -->
    <input type="text" v-model="account">

    <button @click="changeAccount">点我打印数据源 account</button>
</template>