let path = require('path');
let Users = require('../controllers/users');
let Questions = require('../controllers/questions');
let Answers = require('../controllers/answers');

module.exports = function(app){
    app.post('/users', Users.create);
    
    app.get('/sessions', Users.session);
    app.delete('/sessions/:id', Users.logout);

    app.get('/questions', Questions.index);
    app.post('/questions', Questions.create);
    app.get('/questions/:id', Questions.show);

    app.post('/answers', Answers.create);
    app.get('/answers/:id', Answers.show);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}

