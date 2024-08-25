<script setup>
import { computed, ref } from 'vue'

let age = ref(20) // 年龄

// 计算属性：年龄阶段
let ageState = computed(() => {
    if (age.value < 18) {
        return '未成年'
    } else if (age.value < 35) {
        return '青年'
    } else if (age.value < 50) {
        return '中年'
    } else {
        return '老年'
    }
})

let birthday = ref('') // 生日

// 计算属性：星座
let constellation = computed(() => {
    // yyyy-MM-dd -> ['yyyy', 'MM', 'dd']
    let birArr = birthday.value.split('-')
    // 月份
    let month = parseInt(birArr[1])
    // 日份
    let day = parseInt(birArr[2])
    // 判断
    switch (month) {
        case 1:
            if (day <= 19) {
                return '魔羯座'
            } else {
                return '水平座'
            }
        case 2:
            if (day <= 18) {
                return '水平座'
            } else {
                return '双鱼座'
            }
        case 3:
            if (day <= 20) {
                return '双鱼座'
            } else {
                return '白羊座'
            }
        case 4:
            if (day <= 19) {
                return '白羊座'
            } else {
                return '金牛座'
            }
        case 5:
            if (day <= 20) {
                return '金牛座'
            } else {
                return '双子座'
            }
        case 6:
            if (day <= 21) {
                return '双子座'
            } else {
                return '巨蟹座'
            }
        case 7:
            if (day <= 22) {
                return '巨蟹座'
            } else {
                return '狮子座'
            }
        case 8:
            if (day <= 22) {
                return '狮子座'
            } else {
                return '处女座'
            }
        case 9:
            if (day <= 22) {
                return '处女座'
            } else {
                return '天秤座'
            }
        case 10:
            if (day <= 23) {
                return '天秤座'
            } else {
                return '天蝎座'
            }
        case 11:
            if (day <= 22) {
                return '天蝎座'
            } else {
                return '射手座'
            }
        case 12:
            if (day <= 21) {
                return '射手座'
            } else {
                return '魔羯座'
            }
        default:
            return '请选择日期'
    }
})
</script>

<template>
    <div>
        年龄：<input type="number" v-model.lazy="age">
        <!-- 简单的表达式 -->
        <h3>年龄阶段（简单）：{{ age < 18 ? '未成年' : '成年' }} </h3>
        <!-- 计算属性 -->
         <h3>年龄阶段（复杂）：{{ ageState }} </h3>
    </div>

    <hr>
      
    <div>
        生日：<input type="date" v-model="birthday">
        <h3>星座：{{ constellation }}</h3>
    </div>
</template>