'use strict';
let todoCtr = require('./Controler');

module.exports = function (app) {
    app.route('/todos')
        .get(todoCtr.get)
        .post(todoCtr.create)

    app.route('/todos/:id')
        .get(todoCtr.detail)
        .put(todoCtr.update)
        .delete(todoCtr.destroy);
};