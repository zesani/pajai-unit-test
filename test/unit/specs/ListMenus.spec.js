import Vue from 'vue'
import MyComponent from 'src/components/ListMenus'
describe('ListMenus.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MyComponent)
    })
    expect(vm.$el.textContent).to.eql('')
  })
})
