<script>
  export default {
    name: 'app-button',
    functional: true,
    render(h, context) {
      return h('button', {
        ...context.data,
        on: context.listeners,
        class: `
          px-4 py-2
          bg-indigo-500 text-white
          font-bold 
          border border-indigo-600 
          shadow-xs rounded
          hover:bg-indigo-400
          active:bg-indigo-700
          focus:outline-none
          focus:shadow-outline
        `
      }, context.children);
    }
  }
</script>