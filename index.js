module.exports = function(text) {
	return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};