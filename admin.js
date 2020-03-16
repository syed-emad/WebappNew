const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const express = require('express')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose=  require('mongoose');

const User = require('./models/Users')
const Teacher= require('./models/Teachers');
const Item = require('./models/Item');


AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)