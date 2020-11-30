var vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Ria",
       lastname  : "Singh",
       htmlcontent : "<div><h1>Vue Js Template</h1></div>",
       imgsrc : "images/img.jpg"
    }
 });

 var vm2 = new Vue({
    el: '#classbinding',
    data: {
       title : "This is class binding example",
       isActive : false,
       hasError : false
    }
 });

 var vm3 = new Vue({
    el: '#classbinding_2',
    data: {
       title : "This is class binding example with arrays",
       title2 : "This is class binding with arrays and options",
       infoclass : 'info',
       errorclass : 'displayError',
       isActive : true,
       haserror : false,
       title3 : "Inline style Binding",
        activeColor: 'red',
        fontSize :'30'
    },
    components:{
        'new_component' : {
           template : '<div class = "info">Class Binding for component</div>'
        }
     }
 });

 var vm4 = new Vue({
    el: '#databinding',
    data: {
       name:'',
       textmessage:'',
       checked : false,
       picked : 'White',
       languages : "Java",
       age : 0,
        msg: '',
        message : '',
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
         },
         name_2 : ''
    },
    methods : {
        showinputvalue : function(event) {
           this.name_2=event.target.value;
        }
     }
 });

 var vm5 = new Vue({
    el: '#databinding_3',
    data: {
       show: true,
       styleobj: {
          backgroundColor: '#2196F3!important',
          cursor: 'pointer',
          padding: '8px 16px',
          verticalAlign: 'middle',
       },
       items:["Apple","Orange","Banana"]
    },
    methods : {
       showdata : function() {
          this.show = !this.show;
       },
       showinputvalue : function(event) {
        this.items.push(event.target.value);
     }
    },
 });

 var vm6 =  new Vue({
    el: '#animate',
    data: {
       show: true
    }
 });