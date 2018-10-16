var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'BOOKSHOP_STORE_BOOKS',
	'properties': [
		{
			'name': 'Id',
			'column': 'STORE_BOOK_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Book',
			'column': 'STORE_BOOK_BOOK',
			'type': 'INTEGER',
			'required': true
		}, {
			'name': 'Quantity',
			'column': 'STORE_BOOK_QUANTITY',
			'type': 'INTEGER',
			'required': true
		}, {
			'name': 'Store',
			'column': 'STORE_BOOK_STORE',
			'type': 'INTEGER',
			'required': true
		}]
});
exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM BOOKSHOP_STORE_BOOKS");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};