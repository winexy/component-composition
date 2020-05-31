<template>
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
      @keydown="onKeydown(show, $event)"
    >
      {{ value || 'Выберите команду...' }}
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
          v-model="query"
          ref="textField"
          type="search"
          class="w-full"
        />
      </div>
      <list class="p-1 overflow-scroll" :style="{ maxHeight: '100px' }">  
        <list-item
          v-for="item in filtered" 
          :key="item"
          class="flex items-center text-sm"
          @click="$emit('select', item)"
          @keypress.enter="$emit('select', item)"
        >
          {{ item }}
        </list-item> 
      </list> 
    </div>
  </dropdown> 
</template>

<script>
  import List from './List';
  import ListItem from './ListItem';
  import TextField from './TextField';
  import Dropdown from './Dropdown';

  export default {
    name: 'search-box',
    components: {
      List,
      ListItem,
      TextField,
      Dropdown
    },
    props: {
      value: String,
      items: Array
    },
    data() {
      return {
        query: ''
      }
    },
    computed: {
      filtered() {
        return this.items.filter(x => 
          x.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    },
    methods: {
      onKeydown(show, e) {
        if (e.keyCode === 40) {
          show();
          this.$nextTick(() => {
            this.$refs.textField.focus();
          });
        }
      }
    }
  }
</script>