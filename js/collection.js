
var template = function(id){
		return _.template($('#'+id).html());
	}

//Person Model
var Person = Backbone.Model.extend({
	defaults: {
		name: "Guest User",
		age: 30,
		occupation: 'worker'
	}
});

//A List of People
var PeopleCollection = Backbone.Collection.extend({
	model: Person

});

//View for all people
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	// initialize: function(){
	// 	console.log(this.collection);
	// },

	render: function(){
		//Loop over all the person objects
		//Call render for the person objects
		//Display a collection as HTML
		this.collection.each(function(person){
			var personView = new PersonView({model:person});
			this.$el.append(personView.render().el);
		}, this);

		return this; //returning this for chaining..
	}
});


//The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	//template: _.template($('#personTemplate').html()),

	template: template('personTemplate'),

	// initialize: function(){
	// 	this.render();
	// },
	/////////initialize funciton is gone from there. So
	/////////we need to call render method manually now


	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; //returning this from render method
	}
});

var peopleCollection = new PeopleCollection([
	{
		name: 'Mohit Jain',
		age: 26
	},
	{
		name: 'Taroon Tyagi',
		age: 25,
		occupation: 'web designer'
	},
	{
		name: 'Rahul Narang',
		age: 26,
		occupation: 'Java Developer'
	}
	]);
var peopleView = new PeopleView({collection: peopleCollection});