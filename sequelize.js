import Sequelize from 'sequelize';
import UserModel from './models/user';

const sequelize = new Sequelize('users', 'test', 'test1234', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log('Users db and user table have been created');
});

module.exports = User;
