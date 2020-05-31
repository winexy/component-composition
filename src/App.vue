<template>
  <div id="app" class="mx-auto mt-40 max-w-lg">
    <h1 class="font-bold text-xl">Composition</h1>
    <section class="p-4 rounded shadow-xs mt-4">
      <h2 class="font-bold text-lg">Checkbox</h2>
      <checkbox v-model="checked" class="mr-2" name="is_agreed">
        <span slot="label" class="ml-2">i agree</span>
      </checkbox>
    </section>
  </div>
</template>

<script>
  import Checkbox from './components/Checkbox';
   
  export default {
    name: 'App',
    components: {
      Checkbox
    },
    data() {
      return {
        checked: false
      }
    }
  };
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
