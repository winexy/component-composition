<template>
  <label
    class="flex items-center cursor-pointer" 
    @keypress.space="$emit('change', !checked)"
  >
    <input 
      v-bind="$attrs"
      type="checkbox"
      class="hidden"
      @change="$emit('change', !checked)"
    >
    <span
      tabindex="0"
      class="
        flex items-center justify-center
        w-5 h-5
        rounded 
        border border-gray-500
        text-white
        focus:shadow-outline
        focus:outline-none
      "
      :class="{
        'bg-indigo-500': checked,
        'bg-gray-100': !checked
      }"
    >
      <svg 
        v-if="checked"
        class="fill-current w-3"
        viewBox="0 0 321 225" 
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="m317.539 33.624-184.457 184.458c-4.167 4.167-9.625 6.25-15.083 6.25s-10.917-2.083-15.083-6.25l-99.126-99.125c-4.165-4.165-4.165-10.919 0-15.085l15.082-15.082c4.165-4.165 10.919-4.165 15.085 0l84.042 84.042 169.374-169.375c4.165-4.165 10.919-4.165 15.085 0l15.082 15.082c4.164 4.165 4.164 10.919-.001 15.085z" />
      </svg>
    </span>
    <slot name="label" />
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    model: {
      event: 'change',
      prop: 'checked'
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    },
    inheritAttrs: false
  }
</script>