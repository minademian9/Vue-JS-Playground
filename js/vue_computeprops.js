var vm = new Vue({
   el: '#computed_props',
   data: {
      firstname :"M",
      lastname :"D",
      birthyear : ""
   },
   computed :{
      getfullname : function(){
         return this.firstname +" "+ this.lastname;
      }
   }
})

var vm2 = new Vue({
   el: '#computed_props_2',
   data: {
      firstName : "Terry",
      lastName : "Ben"
   },
   methods: {
   },
   computed :{
      fullname : {
         get : function() {
            return this.firstName+" "+this.lastName;
         },
         set : function(name) {
            var fname = name.split(" ");
            this.firstName = fname[0];
            this.lastName = fname[1]
         }
      }
   }
});

var vm3 = new Vue({
   el: '#computed_props_3',
   data: {
      kilometers : 0,
      meters:0
   },
   methods: {
   },
   computed :{
   },
   watch : {
      kilometers:function(val) {
         this.kilometers = val;
         this.meters = val * 1000;
      },
      meters : function (val) {
         this.kilometers = val/ 1000;
         this.meters = val;
      }
   }
});