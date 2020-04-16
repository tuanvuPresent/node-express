'use strict'
const model = require('../../models');
const Todos = model.todos

module.exports = {
    create: async (req, res) => {
        let data = req.body;
        let todo = await Todos.create({
            title: data.title
        })
        res.json(todo)
    },

    get: async (req, res) => {
        let todo = await Todos.findAll()
        res.json(todo)
    },

    detail: async (req, res) => {
        let id = req.params.id
        let todo = await Todos.findAll({
            where: {
                id: id
            }
        });
        res.json(todo)
    },

    update: async (req, res) => {
        let id = req.params.id
        let title = req.body.title
        Todos.update({
            title: title
        }, {
            where: {
                id: id
            }
        });
        res.json({'message': 'success'})
    },

    destroy: async (req, res) => {
        let id = req.params.id
        Todos.destroy({
            where: {
                id: id
            }
        });
        res.json({'message': 'success'})
    },

}