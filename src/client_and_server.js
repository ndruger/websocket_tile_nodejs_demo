/*global global, console, exports, JSON */
(function(){
if (typeof exports == 'undefined') {
	exports = {};
}
exports.MAX_X = 22;	// 0 <= x <= MAX_X
exports.MAX_Y = 20;	// 0 <= y <= MAX_Y
exports.PORT = 8222;
exports.dirToDiff = {
	down: {dx: 0, dy: 1},
	up: {dx: 0, dy: -1},
	left: {dx: -1, dy: 0},
	right: {dx: 1, dy: 0}
};
exports.reverseDir = {	
	down: 'up',
	up: 'down',
	left: 'right',
	right: 'left'
};

// common
var DP = function(var_args){
	if (typeof console != 'undefined') {
		console.log.apply(console, arguments);
	}
};
exports.DIR = function(var_args){
	if (typeof console != 'undefined') {
		console.dir.apply(console, arguments);
	}
};
exports.DP = DP;
exports.LOG = function(var_args){
	DP.apply(this, arguments);
};
exports.DPD = function(var_args){
//	DP(JSON.stringify(var_args));
};
exports.ASSERT = function(exp, var_args){
	if (!exp) {
		if (typeof console != 'undefined') {
			debugger;
//			console.assert.apply(console, arguments);
		}
	}
};
exports.inherit = function(subClass, superClass){
	for (var prop in superClass.prototype) {
		subClass.prototype[prop] = superClass.prototype[prop];
	}
	subClass.prototype.constructor = subClass;
	subClass.prototype.superClass = superClass;
};
exports.superClass = function(subClass){
	return subClass.prototype.superClass.prototype;
};
})();
