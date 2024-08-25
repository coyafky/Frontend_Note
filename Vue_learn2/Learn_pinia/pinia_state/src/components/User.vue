<template>
    <ul>
        <li>年龄：{{ age }}</li>
        <li>等级：{{ level }}</li>
        <li>账号：{{ userAccount }}</li>
        <li>昵称：{{ userNickname }}</li>
    </ul>
</template>

<script setup >
import { ref , computed} from 'vue';
import {useUserstore} from '@/stores/index.js'
import {storeToRefs} from 'pinia'

const user_store = useUserstore()
const {
    age,
    level,
    account:userAccount,
    nikename:userNickname
} = storeToRefs(user_store)

</script>

<style lang="scss" scoped>

</style>