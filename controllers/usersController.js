const User = require('../models/user');

module.exports.signup = function (req, res) {
    return res.render('userSign', {
        title: "SIGN IN"
    })

}

module.exports.login = function (req, res) {
    return res.render('userLog', {
        title: "LOG IN"
    })

}

module.exports.create = function (req, res) {

    if (req.body.password != req.body.conf_password) {
        return res.redirect('back');
    } else {

        User.findOne({ email: req.body.email }).then((user) => {
            // if (err) {
            //     console.log('Error in finding user signing up');
            //     return;
            // }
            if (!user) {
                User.create(req.body).then((user) => {
                    if (user) {
                        return res.redirect('/log-in')
                    }
                }).catch((err) => {
                    if (err) {
                        console.log(req.body);
                        console.log('Error in creating user signing up', err);
                        return;
                    }
                })
            } else {
                return res.redirect('back');
            }

        }).catch((err) => {
            if (err) {
                console.log('Error in finding user signing up');
                return;
            }
        });

    }

}