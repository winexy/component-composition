<template>
  <div>
    <slot v-bind="{ show }" />
    <div class="relative">
      <div 
        v-if="visible"
        ref="content"
        v-on-clickaway="hide"
        class="z-10 absolute top-0"
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
    beforeDestroy() {
      document.removeEventListener('keydown', this.keyboard);
      document.removeEventListener('focusin', this.onFocus);
    },
    methods: {
      show() {
        this.visible = true;
        document.addEventListener('keydown', this.keyboard);
        document.addEventListener('focusin', this.onFocus);
      },
      hide() {
        this.visible = false;
        document.removeEventListener('keydown', this.keyboard);
        document.removeEventListener('focusin', this.onFocus);
      },
      keyboard(e) {
        if (e.keyCode === 27) {
          this.hide();
        }
      },
      onFocus(e) {
        if (!this.$refs.content.contains(e.target)) {
          this.hide(); 
        }
      }
    }
  }
</script>