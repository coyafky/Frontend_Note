<template>

    <p>child counter:{{ props.modelValue }}</p>
    <v-btn @click.stop="e => $emit('update:modelValue', props.modelValue + 1)">+</v-btn>
    <v-btn @click.stop="e => $emit('update:modelValue', props.modelValue - 1)">-</v-btn>
</template>




<script setup>

    defineEmits(['update:modelValue'])
    const props = defineProps(['modelValue'])
</script>


<style scoped>
v-btn {
    /* margin-top: 10px; */
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px;
    color: rgb(183, 40, 102);
}
</style>