
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

////End Points For Courses
router.post('/addCourse' , adminController.addCourse);

router.get('/getCourse' , adminController.getCourse);

router.get('/getAllCourse' , adminController.getAllCourse);

router.put('/updateCourse/:id' , adminController.updateCourse);

router.delete('/deleteCourse/:id' , adminController.deleteCourse);


////End Points For Modules
router.post('/addModule' , adminController.addModule);

router.get('/getModule/:courseName' , adminController.getModule);

router.get('/getAllModule' , adminController.getAllModule);

router.put('/updateModule/:id' , adminController.updateModule);

router.delete('/deleteModule/:id' , adminController.deleteModule);


////End Points For Module Topics
router.post('/addTopic' , adminController.addTopic);

router.get('/getTopic' , adminController.getTopic);

router.get('/getAllTopic' , adminController.getAllTopic);

router.put('/updateTopic/:id' , adminController.updateTopic);

router.delete('/deleteTopic/:id' , adminController.deleteTopic);


////End Points For Batches
router.post('/addBatch' , adminController.addBatch);

router.get('/getBatchById/:id' , adminController.getBatchById);

router.get('/getBatchDetailsByBatchName/:batchName' , adminController.getBatchDetailsByBatchName);

router.get('/getBatch/:courseName' , adminController.getBatch);

router.get('/getAllBatch' , adminController.getAllBatch);

router.put('/updateBatch/:id' , adminController.updateBatch);

router.delete('/deleteBatch/:id' , adminController.deleteBatch);

////End Points For Students
router.post('/addStudent' , adminController.addStudent);

router.get('/getAllStudent' , adminController.getAllStudent);

router.put('/updateStudent/:id' , adminController.updateStudent);

router.delete('/deleteStudent/:id' , adminController.deleteStudent);


////End Points For Trainers
router.post('/addTrainer' , adminController.addTrainer);

router.get('/getAllTrainer' , adminController.getAllTrainer);

router.put('/updateTrainer/:id' , adminController.updateTrainer);

router.delete('/deleteTrainer/:id' , adminController.deleteTrainer);

////End Points For Batch-Trainer-Module
router.post('/addBatchTrainerModule' , adminController.addBatchTrainerModue);

router.get('/getAllBatchTrainerModule' , adminController.getAllBatchTrainerModule);

router.put('/updateBatchTrainerModule/:id' , adminController.updateBatchTrainerModule);

router.delete('/deleteBatchTrainerModule/:id' , adminController.deleteBatchTrainerModule);


////End Points for Admin Dashboard
router.get('/getDashboardData' , adminController.getTotalStudents_Trainers);

////End Points for Admin Calender
router.post('/addEvent' , adminController.addEvent);

router.get('/getAllEvent' , adminController.getAllEvent);


////End Points for ading Admin Details
router.post('/addAdmin' , adminController.addAdmin);



module.exports = router;