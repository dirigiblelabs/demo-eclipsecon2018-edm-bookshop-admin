/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

exports.getView = function(relativePath) {
	return {
		'id': 'StoreBooks',
		'name': 'Books',
		'label': 'Books',
		'factory': 'frame',
		'region': 'center-bottom',
		'link': relativePath + 'services/v3/web/bookshop-admin/ui/Stores/views/master/details/StoreBooks/index.html'
	};
};