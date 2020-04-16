'use strict';
let productCtrl = require('./Controler');

module.exports = function (app) {
    app.route('/products')
        .get(productCtrl.get)
        .post(productCtrl.store);

    app.route('/products/:id')
        .get(productCtrl.detail)
        .put(productCtrl.update)
        .delete(productCtrl.delete);
};