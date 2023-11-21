<template>
    <button class="button" @click="emits('custom:click')">
        <div :class="$style.text">
            {{ props.text }}
        </div>
    </button>
</template>

<script setup lang="ts">
    const emits = defineEmits<{ (e: 'custom:click'): void }>()
    const props = defineProps<{
        text: string
    }>()
</script>

<style module>
    .text {
        color: tomato;
    }
</style>