<template>
  <div class="inline-flex items-center relative">
    <text-field 
      ref="textField"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button 
      v-if="value.length > 0"
      class="
        absolute right-0 mr-2
        flex items-center justify-center
        w-5 h-5
        text-xs
        rounded
        bg-gray-100
        border border-gray-200
        hover:text-gray-600
        hover:bg-gray-200
        active:bg-gray-300
        focus:border-indigo-500
        focus:outline-none
        focus:shadow-outline
      "
      @click="onReset"
    >
      &times;
    </button>
  </div>
</template>

<script>
  import TextField from './TextField';

  export default {
    name: 'resettable-input',
    components: {
      TextField
    },
    props: {
      value: String
    },
    methods: {
      onReset() {
        this.$emit('reset');
        this.$refs.textField.focus();
      }
    }
  };
</script>