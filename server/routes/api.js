const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')
const questionController = require('../controllers/QuestionController')
const userController = require('../controllers/UserController')
const quizController = require('../controllers/QuizControler')
const validators = require('../helpers/validators')


//Event related
router.post('/events' , validators.validateAdmin ,eventController.create);
router.get('/events', eventController.getAll);
router.get('/event/:id', eventController.getEvent);
router.put('/event/:id' , eventController.updateEvent);
router.delete('/event/:id' , eventController.deleteEvent);


//Quiz related
router.post('/quizzes' , quizController.create);
router.get('/quizzes' , quizController.getAll);
router.get('/quiz/:id' , quizController.getOne);
router.delete('/quiz/:id' , quizController.deleteRules);
router.put('/quiz/:id' , quizController.updateRules);
router.post('/validatequiz' , quizController.validateQuiz);
//get burned qr codes in frontend, call get quiz, see array there
router.post('/generateQR', quizController.generateQR);
router.put('/useQR', quizController.useQR)

//Questions related
router.post('/questions' , questionController.create);
router.get('/questions' , questionController.getAllQuestions);
router.get('/questions/:resource' , questionController.getResource);
router.get('/question/:id' , questionController.getQuestion);
router.put('/question/:id' , questionController.updateQuestion);
router.delete('/question/:id' , questionController.deleteQuestion);


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)


router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;