<template>

  <child>
    <template v-slot>
      <p>这个是文本内推</p>
    </template>
  </child>

  <p>这个是在父节点的文本吧</p>

</template>


<script setup>
import child from "./components/childComponent.vue";
</script>