<template>
  <input 
    v-on="$listeners"
    v-bind="$attrs"
    :value="value"
    @input="$emit('onInput', $event.target.value)"
    class="
      px-2 py-1 
      border border-gray-500
      rounded
      focus:outline-none
      focus:border-indigo-500
      focus:shadow-outline
    "
  > 
</template>

<script>
  export default {
    name: 'text-field',
    model: {
      event: 'onInput',
      prop: 'value'
    },
    props: {
      value: String
    },
    methods: {
      focus() {
        this.$el.focus();
      }
    }
  }
</script>