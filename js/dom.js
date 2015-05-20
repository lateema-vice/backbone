$(function () {

var template = _.template("<p>Hello World</p>");

var SharkTankView = Backbone.View.extend({

  initialize: function () {
    this.render();
  },

  render: function(){
  	this.$el.html(template);
  }

});

  new SharkTankView({
  	el: $('#tank'),
  });
});