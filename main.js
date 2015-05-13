//define a class person
var Person = function(config){
	this.name = config.name;
	this.age = config.age;
	this.occupation = config.occupation;
};

//define a function work
Person.prototype.work = function(){
	return this.name + ' is working.';
};