const app = new Vue({
    el: '#app',
    data: {
     tasks: [ { name: "learn Vue.js" } ],
     item: { name: "" }
    },
    methods: {
      addTask() {
        this.tasks.push( { name: this.item.name } )
      }
    }
 });