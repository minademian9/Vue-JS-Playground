Vue.directive("changestyle",{
    bind(e1,binding, vnode) {
       console.log(e1);
       console.log(binding.value.color);
       console.log(vnode);
       e1.style.color=binding.value.color;
       e1.style.fontSize = "30px";
    }
 });
 var vm = new Vue({
    el: '#databinding_4',
    data: {
        name:""
    },
    methods : {
    },
    filters : {
        countletters : function(value) {
           return value.length;
        }
     }
 });