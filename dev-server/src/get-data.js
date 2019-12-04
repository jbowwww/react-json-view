

module.exports = {
	getData
};

function getData() {
	return fetch('http://localhost:2000/data');
}
