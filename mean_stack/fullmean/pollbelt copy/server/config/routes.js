let path = require('path');
let UsersController = require('../controllers/users');
let QuestionsController = require('../controllers/questions');

module.exports = function(app) {
    app.post('/users', UsersController.create);

    app.get('/questions', QuestionsController.index);
    app.post('/questions', QuestionsController.create);
    app.get('/questions/:id', QuestionsController.show);
    app.get('/delete/:id', QuestionsController.delete);

    app.get('/increase/:id/:option', QuestionsController.increasevotes);

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};