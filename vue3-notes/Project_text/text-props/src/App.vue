<template>
  <div>
    <h2>Parent Component</h2>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './components//ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent component!'
    };
  }
};
</script>
