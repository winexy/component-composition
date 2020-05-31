<script>
  export default {
    name: 'app-section',
    functional: true,
    props: {
      title: String
    },
    render(h, context) {
      const title = h('h2', {
        class: 'mb-2 font-bold text-lg'
      }, context.props.title);

      return h('section', {
        class: `px-4 py-3 rounded bg-white shadow-md ${context.data.staticClass}`
      }, [title, context.children]);
    }
  };
</script>