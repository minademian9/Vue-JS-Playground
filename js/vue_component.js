Vue.component('testcomponent',{
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
    data: function() {
       return {
          name : "Ria"
       }
    },
    methods:{
       changename : function() {
          this.name = "Ben";
       },
       originalname: function() {
          this.name = "Ria";
       }
    }
 });

 Vue.component('testcomponent2',{
    template : '<div><h1>This is coming from component</h1></div>'
 });

 var vm = new Vue({
    el: '#component_test'
 });
 var vm1 = new Vue({
    el: '#component_test1'
 });


 Vue.component('button-counter', {
    template: '<button v-on:click = "displayLanguage(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
    data: function () {
       return {
          counter: 0
       }
    },
    props:['item'],
    methods: {
       displayLanguage: function (lng) {
          console.log(lng);
          this.$emit('showlanguage', lng);
       }
    },
 });
 var vm = new Vue({
    el: '#databinding_2',
    data: {
       languageclicked: "",
       languages : ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"]
    },
    methods: {
       languagedisp: function (a) {
          this.languageclicked = a;
       }
    }
 })