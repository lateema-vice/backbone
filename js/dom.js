$(function () {

var SharkTankView = Backbone.View.extend({
  initialize: function () {
    //this.render();
    this.$('button').click(this.dunk);
  },

  // events: {
  // 	"click button" : "dunk"
  // },

  dunk: function(){
  	alert('Oh dear,, my legs have been bitten off.')
  },

  // render: function () {
  //   this.$el.append('sharks!');
  // }
});

  var sharkTankView = new SharkTankView({
    el: $('#tank')
  });
});