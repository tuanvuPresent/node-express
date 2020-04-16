'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    title: DataTypes.STRING
  }, {});
  todos.associate = function(models) {
    // associations can be defined here
  };
  return todos;
};