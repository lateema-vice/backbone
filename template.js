var Person = Backbone.Model.extend({
	defaults: {
		name: "Guest User",
		age: 23,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName : 'li',

	my_template: _.template("<strong><%= name %></strong>(<%= age %>) - <%= occupation %>"),

	initialize: function(){
		this.render();
	},

	// render: function(){
	// 	this.$el.html(
	// 		this.model.get('name')+
	// 		'( ' +
	// 		this.model.get('age') +
	// 		' ) - ' +
	// 		this.model.get('occupation')
	// 	);
	// }

	render: function(){
		this.$el.html(this.my_template(this.model.toJSON()));
	}

});

// var person = new Person;
// person.toJSON();
// var personView = new PersonView({model: person});
// personView.el;
// $(document.body).html(personView.el);