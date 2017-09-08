let path = require('path');
let Users = require('../controllers/users');
let Messages = require('../controllers/messages');
let Comments = require('../controllers/comments');

module.exports = function(app){
    app.post('/users', Users.create);
    
    app.get('/sessions', Users.session);
    app.post('/sessions', Users.authenticate);
    app.delete('/sessions/:id', Users.logout);

    app.get('/messages', Messages.index);
    app.post('/messages', Messages.create);
    app.get('/messages/:id', Messages.show);

    app.post('/comments', Comments.create);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}

