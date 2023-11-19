<template>
    <button>
        {{ text }}
    </button>
</template>

<script setup>
    import { ref } from 'vue'

    const text = ref('Button')
</script>
