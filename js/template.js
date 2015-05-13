var Person = Backbone.Model.extend({
	defaults: {
		name: "Guest User",
		age: 23,
		occupation: 'worker'
	}
});

var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

var PersonView = Backbone.View.extend({
	tagName : 'li',

	template: _.template( $('#personTemplate').html()),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	}

});


//Another way to add people to a collection
var peopleCollection = new PeopleCollection(
	[
		{
			name: 'Mohit Jain',
			age: 26
		},
		{
			name: 'Taroom Tyaqi',
			age: 25,
			occupation: 'web designer'
		},
		{
			name: 'Rahul Narang',
			age: 26,
			occupation: 'Java Developer'
		}
	]
	);