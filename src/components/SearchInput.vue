<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative">
    <input
      :value="modelValue"
      class="p-4 border outline-none w-[50%] rounded"
      type="text"
      placeholder="Search input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
