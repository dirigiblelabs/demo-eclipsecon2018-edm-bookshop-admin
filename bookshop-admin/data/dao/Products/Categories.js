var query = require('db/v4/query');
var daoApi = require('db/v4/dao');
var dao = daoApi.create({
	'table': 'BOOKSHOP_CATEGORIES',
	'properties': [
		{
			'name': 'Id',
			'column': 'CATEGORY_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Name',
			'column': 'CATEGORY_NAME',
			'type': 'VARCHAR',
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
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM BOOKSHOP_CATEGORIES");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};