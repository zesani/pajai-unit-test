import Vue from 'vue'
import MyComponent from 'src/App'
describe('App.vue', () => {
  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    // expect(vm.$el.textContent).to.eql('')
    expect(vm.$el).to.be.ok
  })
  it('ทดสอบการเพิ่ม-ลบ ข้อมูล', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    // expect(vm.$el.textContent).to.eql('')
    vm.addMenu('suki', 50)
    vm.addMenu('suki', 51)
    expect(vm.menus.length).to.eql(2)
    vm.deleteMenu(vm.menus[0].id)
    expect(vm.menus.length).to.eql(1)
  })
})
