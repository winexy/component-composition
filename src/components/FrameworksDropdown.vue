<template>
  <dropdown>
    <slot slot-scope="slotProps" v-bind="slotProps" />  
    <list
      slot="content"
      class="w-40 space-y-1 p-1 mt-1 shadow-xs bg-white rounded"
    >
      <list-item
        v-for="framework in frameworks"
        :key="framework.name"
        class="flex items-center text-sm"
      >
        <img aria-hidden="true" :src="framework.icon" class="mr-2 w-5" />
        <strong class="font-semibold">{{ framework.name }}</strong>
      </list-item>
    </list>
  </dropdown>
</template>

<script>
  import List from './List';
  import ListItem from './ListItem';
  import Dropdown from './Dropdown';

  export default {
    name: 'FrameworksDropdown',
    components: {
      List,
      ListItem,
      Dropdown
    },
    props: {
      frameworks: Array
    }
  };
</script>
