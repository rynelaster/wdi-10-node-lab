module.exports.color = red; 

module.exports.convertable = false;

module.exports.speed = 0;

module.exports.accelerate = (spd) => {
	let newSpeed = speed + spd;
	console.log('the old speed is', this.speed, 'the new spped is', this.newSpeed)
}

module.exports.decelerate = (spd) => {
	let newSpeed = speed - spd;
	console.log('the old speed is', this.speed, 'the new speed is', this.newSpeed)
}

