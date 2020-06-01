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
  // Passing resources one by one
    rootPath: '/admin',
    resources: [
      {
        resource: User,     
        options: {
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            email: { isVisible: { list: true, filter: true, show: true, edit: true } },
            password: { isVisible: { list: false, filter: false, show: false, edit: true } },
        }
      },
      {
        resource: Teacher,
        options: {
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            Qualification: { isVisible: { list: true, filter: true, show: true, edit: true } },
          }
      },
      {
        resource: Item,
        options: {
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
          }
      }
    ],
    branding: {
        logo: 'bulb3.png',
        companyName: 'Professor',
        softwareBrothers: false   // if Software Brothers logos should be shown in the sidebar footer
      },
  })

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)