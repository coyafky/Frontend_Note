<script>

export default {
    // 字符串数组的形式传递组件
    props: ['flat', 'title', 'error'],
    methods: {
        showPropdata() {
            // 在选项式 API 的 JS 代码中，通过 this.$props 来访问 props 的内容
            console.log(this.$props)
            console.log(this.$props.title)
            console.log(this.$props.error)
            console.log(this.$props.flat)
        },
        changeErrorProps() {
            // 不能直接修改 props 的数据，因为是只读的
            this.$props.error = !this.$props.error
        }
    }
}

</script>


<template>
    <button :class="{ error, flat }" @click="showPropdata" @mousedown.right="changeErrorProps">

    </button>
</template>

<style>
button {
    border: none;
    padding: 12px 25px;
}

.error {
    background-color: rgb(197, 75, 75);
    color: white;
}

.flat {
    box-shadow: 0 0 10px grey;
}
</style>