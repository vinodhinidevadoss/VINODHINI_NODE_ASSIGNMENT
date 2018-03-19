var express = require('express')
var router = express.Router()
var subscription = require('../model/subscription')
const sendmail = require('sendmail')();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

router.post('/api/subscribe', function (req, res, next) {
  let user = {
    name: req.body.name,
    subScript: req.body.subscribe,
    email: req.body.mail
  }
  let sub = new subscription({
    name: user.name,
    subscribe: user.subScript,
    email: user.email
  });
  sub.save((err, data) => {
    if(err){
      if(err.code == 11000){
       let errMsg = "Email already subscribed !!";
       res.status(500).json({ status: 500, error: errMsg });
     }
    }
    else {
       res.json({ status: 200, msg: 'Successfully subscribed !!' });
       sendmail({
            from: 'vinodhini.devadoss@gmail.com',
            to: '@gmail.com',
            subject: 'test sendmail',
            html: 'Mail of test sendmail ',
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
     }
  });
});

module.exports = router;
