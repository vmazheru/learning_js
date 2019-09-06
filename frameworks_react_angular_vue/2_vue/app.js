Vue.component('app-hobby', {
	props: ['hobby'],
  template: '<li v-on:click="removeHobby">{{ hobby }}</li>',
  methods: {
  	removeHobby: function() {
    	this.$emit('hobbyremoved', this.hobby);
    }
  }
});

new Vue({
	el: '#app',
  data: {
  	hobbies: ['Sports', 'Cooking'],
    userHobby: '',
    hobbyWasDeleted: false
  },
  methods: {
  	addHobby: function() {
    	this.hobbies.push(this.userHobby);
    },
    removeHobby: function(hobby) {
    	var position = this.hobbies.indexOf(hobby);
      this.hobbies.splice(position, 1);
      this.hobbyWasDeleted = true;
    }
  }
});