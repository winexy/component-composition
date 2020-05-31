<template>
  <div>
    <slot v-bind="{ show }" />
    <div class="relative">
      <div 
        v-if="visible"
        v-on-clickaway="hide"
        class="absolute top-0"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    name: 'Dropdown',
    mixins: [clickaway],
    data() {
      return {
        visible: false
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      }
    }
  }
</script>