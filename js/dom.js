var Shark = Backbone.Model.extend({
	initialize: function(){
		this.on("change:name", function(model){
			alert("Shark is now called "+model.get("name"));
		});
	}
});