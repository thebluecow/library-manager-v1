Date.prototype.addDays = function(days) {
		var dat = new Date(this.valueOf());
		dat.setDate(dat.getDate() + days);
		return dat;
}

function getDate() {
	var date = new Date();
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

function addWeek() {
	var date = new Date();
	date = date.addDays(7);
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

module.exports.getdate = getDate;
module.exports.addweek = addWeek;