<template>
  <div id="app" class="py-8 min-h-screen min-w-screen bg-gray-800">
    <main class="mx-auto max-w-xl">
      <h1 class="font-bold text-white text-xl">Composition</h1>
      <section class="px-4 py-3 rounded bg-white shadow-md mt-4">
        <h2 class="font-bold text-lg">Checkbox</h2>
        <checkbox v-model="checked" class="mr-2" name="is_agreed">
          <span slot="label" class="ml-2">kill me please</span>
        </checkbox>
      </section>
    </main>
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
