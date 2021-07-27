var query = require('db/v4/query');
var daoApi = require('db/v4/dao');
var dao = daoApi.create({
	'table': 'BOOKSHOP_BOOKS',
	'properties': [
		{
			'name': 'Id',
			'column': 'BOOK_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Title',
			'column': 'BOOK_TITLE',
			'type': 'VARCHAR',
			'required': true
		}, {
			'name': 'Description',
			'column': 'BOOK_DESCRIPTION',
			'type': 'VARCHAR',
		}, {
			'name': 'Category',
			'column': 'BOOK_CATEGORY',
			'type': 'INTEGER',
			'required': true
		}, {
			'name': 'Image',
			'column': 'BOOK_IMAGE',
			'type': 'VARCHAR',
		}, {
			'name': 'ISBN',
			'column': 'BOOK_ISBN',
			'type': 'VARCHAR',
			'required': true
		}, {
			'name': 'Pages',
			'column': 'BOOK_PAGES',
			'type': 'INTEGER',
		}, {
			'name': 'Price',
			'column': 'BOOK_PRICE',
			'type': 'DOUBLE',
			'required': true
		}, {
			'name': 'Currency',
			'column': 'BOOK_CURRENCY',
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
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM BOOKSHOP_BOOKS");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};