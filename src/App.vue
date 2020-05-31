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
        <app-section title="SearchBox" class="pb-5">
          <dropdown>
            <div 
              tabindex="0" 
              slot-scope="{ show }"
              class="
                inline px-3 py-2 
                rounded shadow-sm 
                border border-gray-200 
                cursor-pointer
                focus:outline-none
                focus:shadow-outline
              "
              @click="show"
              @focus="onSearchBoxFocus(show)"
            >
              {{ search.value || 'Выберите команду...' }}
            </div>
            <div
              slot="content" 
              class="
                w-40 space-y-1 mt-3
                shadow-xs bg-white rounded
              "
            >
              <div class="p-2 shadow-sm">
                <text-field 
                  v-model="search.query"
                  ref="searchField"
                  type="search"
                  class="w-full"
                />
              </div>
              <list
                class="p-1 overflow-scroll"
               :style="{ maxHeight: '100px' }"
              >  
                <list-item
                  v-for="item in filtered" 
                  :key="item"
                  class="flex items-center text-sm"
                  @click="search.value = item"
                  @keypress.enter="search.value = item"
                >
                  {{ item }}
                </list-item> 
              </list> 
            </div>
          </dropdown> 
        </app-section>
        <app-section title="Resetable TextField">
          <div class="inline-flex items-center relative">
            <text-field 
              ref="resetableField"
              v-model="textContent" 
            />
            <button 
              v-if="textContent.length > 0"
              class="
                absolute right-0 mr-2
                flex items-center justify-center
                w-5 h-5
                text-xs
                rounded
                bg-gray-100
                border border-gray-200
                hover:text-gray-600
                hover:bg-gray-200
                active:bg-gray-300
                focus:border-indigo-500
                focus:outline-none
                focus:shadow-outline
              "
              @click="onReset"
            >
              &times;
            </button>
          </div>
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
        ],
        search: {
          query: '',
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
    },
    computed: {
      filtered() {
        return this.search.items.filter(x => 
          x.toLowerCase().includes(this.search.query.toLowerCase())
        );
      }
    },
    methods: {
      onSearchBoxFocus(show) {
        show();
        this.$nextTick(() => {
          this.$refs.searchField.focus();
        });
      },
      onReset() {
        this.textContent = '';
        this.$refs.resetableField.focus();
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
