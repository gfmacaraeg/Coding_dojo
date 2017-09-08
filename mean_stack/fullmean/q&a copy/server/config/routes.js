let path = require('path');
let UsersController = require('../controllers/users');
let QuestionsController = require('../controllers/questions');
let AnswersController = require('../controllers/answers');

module.exports = function(app) {
    app.post('/users', UsersController.create);

    app.get('/questions', QuestionsController.index);
    app.post('/questions', QuestionsController.create);
    app.get('/questions/:id', QuestionsController.show);

    app.post('/answers', AnswersController.create);
    app.put('/answers/:id', AnswersController.increaseLikes);

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};