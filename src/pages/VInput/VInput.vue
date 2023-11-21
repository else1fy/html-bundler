<template>
    <input type="text" v-model="lulz" v-maskito="{ mask: /^\d*$/ }">
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { maskito as vMaskito } from '@maskito/vue'
 
    const lulz = ref('')
</script>