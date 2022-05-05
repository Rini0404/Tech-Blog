const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {

        },
        password: {

        },
    },
    {
    hooks: {
        // set up beforeCreate lifecycle "hook"
        // beforeCreate: async () => {},
        // beforeUpdate: async () => {}
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;