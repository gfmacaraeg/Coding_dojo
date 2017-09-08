class Ninja{
	constructor(name){
	this.name = name;
	this.health = 100;
	this.speed = 3;
	this.strength = 3;
	}
	// sayName(this);
	// showStats(this);
	sayName(){
		console.log(this.name);
		return this
	}
	showStats(){
		console.log("Health : " + this.health);
		console.log("Speed : " + this.speed);
		console.log("Strength : " + this.strength);
		return this
	}
	
	drinkSake(){
		this.health += 10
		return this;
	}
	punch(punched){
		punched.health -= 5
		console.log(punched.name + ' was punched by ' +this.name+ " and lost 5 health");
		return this;
	}
	
}
class Sensei extends Ninja{
	constructor(name){
		super(name);
		this.wisdom = 10;
	}
	speakWisdom(){
		this.drinkSake()
		console.log("This is a wise message");
		return this
	}
}

// let ninja1 = new Ninja('Donatello');
// let ninja2 = new Ninja('Michael')
// console.log(ninja1.sayName())
// console.log(ninja1.drinkSake());
// console.log(ninja1.health);


// ninja1.punch(ninja2)
// console.log(ninja2.health);
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom().speakWisdom();
super_sensei.sayName().showStats();






















