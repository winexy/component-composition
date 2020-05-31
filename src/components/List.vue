<script>
  export default {
    name: 'list',
    functional: true,
    render(h, context) {
      return h('ul', context.children);
    }
  };
</script>