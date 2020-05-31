<script>
  export default {
    name: 'list-item',
    functional: true,
    render(h, context) {
      return h('li', {
        attrs: {
          tabindex: 0
        },
        class: `
          px-4 py-1
          hover:bg-gray-100
          focus:outline-none
          focus:bg-gray-200
          rounded
        `
      }, context.children);
    }
  };
</script>