const LogicpoolAssignments = require('../models/assignments');

async function addAssignment(req, res) {
    try {
        let incomingCourseName = req.body.courseName;
        let incomingModuleName = req.body.moduleName;
        let incomingAssignmentURL = req.body.assignmentURL;
        let incomingAssignmenName = req.body.assignmentName;
        
    
        const newUrl = new LogicpoolAssignments ({
            courseName: incomingCourseName,
            moduleName: incomingModuleName,
            assignmentName: incomingAssignmenName,
            assignmentURL: incomingAssignmentURL
            
        });
    
        await newUrl.save();
    
        console.log("New Assignment Uploaded Successfully");
        res.status(201).json({message: "New Assignment Uploaded Successfully" , status: true}); 
    
        } catch (err) {
            console.log(err);
            res.status(500).json({Message: err.message});    
        }
    
}

async function getAllAssignment (req, res) {
    try {
        let assignments = await LogicpoolAssignments.find(); //This will return all 

        if(assignments.length > 0) return res.status(200).json({assignments , status: true});
        else return res.status(404).json({message: 'No Assignments Available in the Database' , status: false});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
        
    }
}

async function getAssignmentByCourseName(req, res) {
    try {
        let assignments = await LogicpoolAssignments.find({courseName: req.params.courseName}); //This will return all 
        if(assignments.length > 0) return res.status(200).json({assignments , status: true});
        else return res.status(404).json({message: 'No Assignments Available in the Database' , status: false});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
        
    }
}

async function deleteAssignment(req, res) {
    
}

module.exports = {
    addAssignment,
    getAllAssignment,
    getAssignmentByCourseName,
    deleteAssignment
}