<template>
<p>Parent counter :{{ state.counter }}</p>
<Counter v-model="state.counter">

</Counter>
</template>


<script setup> 
import Counter from "./components/Counter.vue";
import { ref ,reactive} from "vue";

const  state = reactive({
  counter:0
})
</script>