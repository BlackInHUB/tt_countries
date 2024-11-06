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
      class="font-medium text-gray-700 px-4 py-2 border-2 border-amber-300 bg-slate-300 outline-none w-[50%] rounded focus:border-amber-500 transition-all placeholder:text-gray-500 placeholder:font-medium"
      placeholder="Search input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
