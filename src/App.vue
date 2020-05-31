<template>
  <div id="app" class="py-8 min-h-screen min-w-screen bg-gray-800">
    <main class="mx-auto max-w-xl">
      <h1 class="font-bold text-white text-4xl">Composition</h1>
      <div class="mt-4 space-y-4">
        <app-section title="Checkbox">
          <checkbox v-model="checked" class="mr-2" name="is_agreed">
            <span slot="label" class="ml-2">kill me please</span>
          </checkbox>
        </app-section>
        <app-section title="List">
          <list>  
            <list-item>react</list-item>
            <list-item>vue</list-item>
            <list-item>angular</list-item>
          </list>
        </app-section>
        <app-section :title="`TextField ${textContent}`">
          <text-field 
            v-model="textContent" 
            type="text"
            name="text-content"
          />
        </app-section>
      </div>
    </main>
  </div>
</template>

<script>
  import { AppSection } from './components/AppSection';
  import Checkbox from './components/Checkbox';
  import List from './components/List';
  import ListItem from './components/ListItem';
  import TextField from './components/TextField';
   
  export default {
    name: 'App',
    components: {
      AppSection,
      TextField,
      ListItem,
      List,
      Checkbox
    },
    data() {
      return {
        checked: false,
        textContent: ''
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
