
const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainers');
const assignmentsController = require('../controllers/assignment');

// router.post('/register' , trainerController.trainerRegistration);

// router.get('/login' , trainerController.trainerLogin);

////End Points for Trainer Calender
router.post('/addEvent' , trainerController.addEvent);

router.get('/getAllEvent' , trainerController.getAllEvent);

////End Points for Assignment
router.post('/addAssignment' , assignmentsController.addAssignment);

module.exports = router;