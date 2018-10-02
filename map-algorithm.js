var array = [1,2,3];
var getArray = function(array, callback) {
	var newArray = [];
	for (var i = 0; i <array.length; i++) {
		newArray.push(callback(array, i, newArray));
	}
	return newArray;
}