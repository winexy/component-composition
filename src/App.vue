<template>
  <div id="app" class="py-8 mb-64 h-full w-full">
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
          <frameworks-dropdown :frameworks="frameworks">
            <app-button slot-scope="{ show }" @click="show">
              click me
            </app-button>
          </frameworks-dropdown> 
          <frameworks-dropdown :frameworks="frameworks">
            <button
              slot-scope="{ show }" 
              class="mt-2 p-5 border border-indigo-500"
              @click="show"
            >
              another one
            </button>
          </frameworks-dropdown> 
        </app-section>
        <app-section title="SearchBox" class="pb-5">
          <search-box 
            :value="search.value"
            :items="search.items"
            @select="search.value = $event"
          />
        </app-section>
        <app-section title="Resettable TextField">
          <resettable-input 
            v-model="textContent"
            @reset="textContent = ''" 
          />
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
  import AppButton from './components/AppButton';
  import SearchBox from './components/SearchBox';
  import ResettableInput from './components/ResettableInput';
  import FrameworksDropdown from './components/FrameworksDropdown';

  export default {
    name: 'App',
    components: {
      FrameworksDropdown,
      SearchBox,
      AppSection,
      TextField,
      ListItem,
      List,
      AppButton,
      Checkbox,
      ResettableInput
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
        ],
        search: {
          value: '',
          items: [
            'Valenca',
            'Sevilla',
            'Atletico',
            'Zaragoza',
            'Mallorca',
            'Getafe',
            'Atletic Bilbao',
            'Real Sociedad',
            'Osasuna'
          ]
        }
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
