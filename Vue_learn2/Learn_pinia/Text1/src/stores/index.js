import { defineStore } from "pinia";


// options store
export const useAgeStore = defineStore("age", {
    state: () => {
        // 必须是一个函数，函数中返回一个对象,为了防止数据污染

        return {
            age:30
        }

    },

    getters :{
        // 相当于组件中的computed属性
        getterAge(state){
            return state.age+10
        }
    },

    actions:{
        // 相当于method
        addAge(){
            this.age+=1
        }
    }
})