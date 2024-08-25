<script>
import ButtonVue from './components/Button.vue';
export default {
  components: {
    ButtonVue
  },

  data() {
    return {
      iserror: false,
      isFalt: false,
      btnText: 'Enviar',
    }
  }
}

</script>


<template>
  <p>
    主题
  </p>
  <input type="checkbox" v-model="iserror">

  <p>
    阴影
  </p>

  <input type="checkbox" name="" id="" v-model="isFalt">
  <p>
    按钮文本
  </p>

  <input type="text" v-model="btnText">

  <hr>

  <ButtonVue :title='btnText' :error='iserror' :flat="isFalt">

  </ButtonVue>
</template>