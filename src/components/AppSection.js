export const AppSection = {
  name: 'app-section',
  functional: true,
  props: {
    title: String
  },
  render(h, context) {
    return h('section', {
      class: `px-4 py-3 rounded bg-white shadow-md`
    }, [
      h('h2', {
        class: 'font-bold text-lg'
      }, context.props.title),
      context.children
    ]);
  }
};
