<template>
  <div id="app" class="py-8 min-h-screen min-w-screen bg-gray-800">
    <main class="mx-auto max-w-xl">
      <h1 class="font-bold text-white text-4xl">Composition</h1>
      <div class="mt-4 space-y-4">
        <AppSection title="Checkbox">
          <checkbox v-model="checked" class="mr-2" name="is_agreed">
            <span slot="label" class="ml-2">kill me please</span>
          </checkbox>
        </AppSection>
        <AppSection title="Dropdown">
          
        </AppSection>
      </div>
    </main>
  </div>
</template>

<script>
  import { AppSection } from './components/AppSection';
  import Checkbox from './components/Checkbox';
   
  export default {
    name: 'App',
    components: {
      AppSection,
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
