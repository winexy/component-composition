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
        <app-section title="Dropdown">
          <dropdown>
            <app-button slot-scope="{ show }" @click="show">
              click me
            </app-button>
            <list 
              slot="content" 
              class="w-40 space-y-1 p-1 mt-1 shadow-xs bg-white rounded"
            >  
              <list-item
                v-for="framework in frameworks" 
                :key="framework.name"
                class="flex items-center text-sm"
              >
                <img aria-hidden="true" :src="framework.icon" class="mr-2 w-5">
                <strong class="font-semibold">{{ framework.name }}</strong>
              </list-item> 
            </list> 
          </dropdown> 
        </app-section>
      </div>
    </main>
  </div>
</template>

<script>
  import AppSection from './components/AppSection';
  import Checkbox from './components/Checkbox';
  import List from './components/List';
  import ListItem from './components/ListItem';
  import TextField from './components/TextField';
  import Dropdown from './components/Dropdown';
  import AppButton from './components/AppButton';
   
  export default {
    name: 'App',
    components: {
      AppSection,
      TextField,
      Dropdown,
      ListItem,
      List,
      AppButton,
      Checkbox
    },
    data() {
      return {
        checked: false,
        textContent: '',
        frameworks: [
          {
            name: 'React',
            icon: 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/20167174151551942641-512.png'
          },
          {
            name: 'Vue',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
          },
          {
            name: 'Angular',
            icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'
          }
        ]
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
