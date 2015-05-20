var SharkTankView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.append('sharks!');
  }
});

$(function () {
  var sharkTankView = new SharkTankView({
    el: $('#tank')
  });
});