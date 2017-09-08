function Ninja(name){
	this.name = name;
	this.health = 100;
	this.speed = 3;
	this.strength = 3;
	// sayName(this);
	// showStats(this);
	this.sayName = function(){
		console.log(this.name);
	}
	this.showStats = function(){
		console.log("Health : " + this.health);
		console.log("Speed : " + this.speed);
		console.log("Strength : " + this.strength);
	}
	// function drinkSake(self){
	// 	self.health += 10
	// 	return self
	// }
	this.drinkSake = function(){
		this.health += 10
		return this;
	}
	this.punch = function(punched){
		punched.health -= 5
		console.log(punched.name + ' was punched by ' +this.name+ " and lost 5 health");
		return this;
	}
	
}

// Ninja.prototype.puch = function(){
// 	punched.health -= 5
// 		console.log(punched.name + ' was punched by ' +this.name+ " and lost 5 health");
// 		return this;
// }



let ninja1 = new Ninja('Donatello');
let ninja2 = new Ninja('Michael')
console.log(ninja1.sayName())
console.log(ninja1.drinkSake());
console.log(ninja1.health);


ninja1.punch(ninja2)
console.log(ninja2.health);