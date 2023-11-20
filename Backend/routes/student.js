
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');
const assignmentsController = require('../controllers/assignment');

router.get('/getStudent/:id' , studentController.getStudent);

router.get('/getBatchmates/:courseName/:batchName' , studentController.getBatchmates);

router.get('/getTrainers/:courseName/:batchName' , studentController.getTrainers);

router.get('/getAllAssignment' , assignmentsController.getAllAssignment);

router.get('/getAssignmentByCourseName/:courseName' , assignmentsController.getAssignmentByCourseName);

module.exports = router;
