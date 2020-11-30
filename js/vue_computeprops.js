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