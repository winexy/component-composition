<script>
  export default {
    name: 'list-item',
    functional: true,
    render(h, context) {
      return h('li', {
        class: `
          px-4 py-1
          hover:bg-gray-100
          rounded
        `
      }, context.children);
    }
  };
</script>