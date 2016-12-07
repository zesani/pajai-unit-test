<template lang="html">
  <div>
    <button type="button" name="button" @click="addMenu('su', 55)">1</button>
    <button type="button" name="button" @click="deleteMenu(menus[0].id)">2</button>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCSFoFDwPC4LqYbJWdse3JFNYjTlNgWdF0',
  authDomain: 'pajai-unit-test.firebaseapp.com',
  databaseURL: 'https://pajai-unit-test.firebaseio.com',
  storageBucket: 'pajai-unit-test.appspot.com',
  messagingSenderId: '641901695500'
}
firebase.initializeApp(config)
var Menus = firebase.database().ref('menus')
export default {
  data () {
    return {
      menus: []
    }
  },
  mounted () {
    var vm = this
    Menus.on('child_added', function (data) {
      var item = data.val()
      item.id = data.key
      vm.menus.push(item)
    })
    Menus.on('child_removed', function (data) {
      // var id = data.key
      // var index = vm.menus.findIndex(menu => menu.id === id)
      var item = data.val()
      item.id = data.key
      console.log(item)
      // console.log(vm.menus)
      // var index = vm.menus.indexOf(item)
      var index
      vm.menus.some(function (menu, i) { index = i; return menu === item })
      console.log(i)
      vm.menus.splice(index, 1)
    })
  },
  methods: {
    addMenu (name, price) {
      Menus.push({
        name,
        price
      })
    },
    deleteMenu (id) {
      firebase.database().ref('menus/' + id).remove()
    }
  }
}
</script>

<style lang='css'>
</style>
