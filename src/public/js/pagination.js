// JavaScript Document
var offsets = {};

function pagination(totalCount, limit, currentPage) {
	offsets.pages = Math.ceil(totalCount / limit);
	offsets.page  = currentPage;
	offsets.num   = currentPage * limit;
	offsets.prev  = offsets.page > 1;
	offsets.next  = totalCount > offsets.num;
	offsets.total = totalCount;
	// do math here. On pug template the + was building a string
	offsets.nextpage = parseInt(currentPage) + 1;
	offsets.prevpage = parseInt(currentPage) - 1;

	return offsets;
}

// build querystring for use with filters and pages
function queryString(filter) {
	console.log('filter: ', filter);
	if (filter == '' || filter == 'undefined') {
		return '?page=';
	}
		return '?filter=' + filter + '&page=';
}

// used strictly for the search fields on /book
// builds the where clause for sequelize based on req.query object
// passed to it { title: 'on the road', author: 'kerouac', genre:, first_published: }
function searchParameters(query) {
	let search = {};
	search.where = {};
	let $and = [];
	let qstring = '&';
	
	// loop through search object
	for (var key in query) {
	  if (query.hasOwnProperty(key)) {
		  
		  // build search string to be used in pagination next and prev href
		  qstring += [key] + '=' + query[key] + '&';
		  
		if (query[key] != '') {
			if (query[key] === 'first_published') {
				// first_published is equal to, not like
				$and.push({ [key]: { $eq: query[key] } });
			} else {
				// all other fields use like
				$and.push({ [key]: { $like: ('%' + query[key] + '%').toLowerCase() } });
			}
		}
	  }
	}
	
	// if $and has multiple, then take $and parameter with array
	if ($and.length > 1) {
		search.where.$and = $and;
	} else {
		// if $and is length of 1, then take array value
		search.where = $and[0];
	}
	// set searchstring parameter
	search.searchstring = qstring;
	
	return search;
}

module.exports.pagination = pagination;
module.exports.querystring = queryString;
module.exports.search = searchParameters;