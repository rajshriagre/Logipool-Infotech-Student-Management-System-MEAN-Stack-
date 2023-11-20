
const LogicpoolTrainers = require('../models/trainers');
const LogicpoolCalenderEvents = require('../models/calender-events');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// async function trainerLogin(req, res) {

//     try {
        
//         let incomingEmail_Id =  req.body.Email_Id;
//         let incomingPassword =  req.body.Password;
        
//         let trainer = await LogicpoolTrainers.find({Email_Id: incomingEmail_Id});
        
//         // if(trainer.length > 0) {

//             // bcrypt.compare(incomingPassword , trainer[0].Password , (err, result) => {
//             //     if(err) {
//             //         throw new Error('Something went wrong');
//             //     }
                
//             //     if(result === true) {
//             //         console.log(trainer[0].id); // Just for self analysis
//             //         console.log(trainer[0]._id); // Just for self analysis
//             //         return res.status(200).json({message: 'Trainer logged in successfully'}); //Here only we have to generate jwt token i.e token: generateAccessToken(user[0].id, user[0].Name , user[0].ispremiumuser)}

//             //     } else {
//             //         return res.status(401).json({message: 'Password is Incorrect'});
//             //     }
//             // })
            
//             // } else {
//             //     return res.status(404).json({message: 'Trainer Does Not Exists'});
//             // }

//             res.status(200).json(trainer);
    
//         }catch (err) {
//         console.log(err);
//         res.status(500).json({message: `${err.message}`});
//     }

// }


async function addEvent(req, res) {
    try {
    let incomingEventName = req.body.eventName;
    let incomingEventDate = req.body.eventDate;
    let incomingEventType = req.body.eventType;
    let incomingBatchName = req.body.batchName;
    let incomingCourseName = req.body.courseName;

    const newEventDetail = new LogicpoolCalenderEvents ({
        eventName: incomingEventName,
        eventDate: incomingEventDate,
        eventType: incomingEventType,
        batchName: incomingBatchName,
        courseName: incomingCourseName
    });

    await newEventDetail.save();

    console.log("New Calender Event Created");
    res.status(201).json({message: "New Calender Event Created" , status: true}); 

    } catch (err) {
        console.log(err);
        res.status(500).json({Message: err.message});    
    }

}

async function getAllEvent(req, res) {
    try {

        let details = await LogicpoolCalenderEvents.find(); //This will return all events

        if(details.length > 0) return res.status(200).json({details , status: true});
        else return res.status(404).json({message: 'No Calender Events Available in the Database' , status: false});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
        
    }
    
}

async function updateEvent(req, res) {
    
}

async function deleteEvent(req, res) {
    
}




module.exports = {
    // trainerLogin,
    addEvent,
    getAllEvent
}
