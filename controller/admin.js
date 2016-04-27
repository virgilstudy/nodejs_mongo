'use strict';

var ctrl = {};
exports = module.exports = ctrl;
// var admin = {};
// exports = module.exports = admin;

var User = Database.models.user;
var views = require('co-views');
var parse = require("co-body");
var render = views(Conf.view, {
    default: 'jade'
});

ctrl.index = function*(next) {
    this.body = yield render('admin/index.jade');
};
ctrl.auth = function*(next) {
    // var u = new User();
    // u.email = "1280116229@qq.com";
    // u.password = "111111";
    // u.save();
    // console.log(u);
    var data = yield parse(this);
    var users = yield User.getAccounts();
    //var users = yield User.find();
    console.log(data);
    console.log('users');
    console.log(users);

    //console.log(User.find({}));

    for (var idx in users) {
        console.log(users[idx]);
        if (users[idx].email == data.email && users[idx].password == data.password) {
            this.body = {
                isSuccess: true
            };
            return;
        }
    }
    this.body = {
        isSuccess: false
    };
};
