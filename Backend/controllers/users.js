
const LogicpoolUsers = require('../models/users');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

async function userRegistration(req, res) {
    try {

        let incomingEmail = req.body.emailId;
        let incomingPassword = req.body.password;
        let incomingRoleId = req.body.Role_Id;

        // const saltrounds = 10;

        // bcrypt.hash(incomingPassword, saltrounds, async(error , hash) => {
            
        // console.log(error);
            
        // const newUser = new LogicpoolUsers({
        //     Email_Id: incomingEmail_Id,
        //     Role_Id: incomingRole_Id,
        //     Password: incomingPassword
        // });

        // await newUser.save();
        // console.log("New User Created");
        // res.status(201).json({message: "New User Record Created Successfully"});

        // })

        const newUser = new LogicpoolUsers({
            emailId: incomingEmail,
            Role_Id: incomingRoleId,
            password: incomingPassword
        });

        await newUser.save();
        console.log("New User Created");
        res.status(201).json({message: "New User Record Created Successfully"});


              
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: error.message});
    }
}



async function userLogin(req, res) {

    try {
        
        let incomingEmail = req.body.emailId;
        let incomingPassword = req.body.password;
        
        
        let user = await LogicpoolUsers.find({emailId: incomingEmail});
        
        if(user.length > 0) {

            bcrypt.compare(incomingPassword , user[0].password , (err, result) => {
                if(err) {
                    throw new Error('Something went wrong');
                }
                
                if(result === true) {
                    // console.log(user[0].id); // Just for self analysis
                    // console.log(user[0]._id); // Just for self analysis
                    return res.status(200).json({ user , message: 'User logged in successfully' , status: true }); //Here only we have to generate jwt token i.e token: generateAccessToken(user[0].id, user[0].Name , user[0].ispremiumuser)}

                } else {
                    return res.status(401).json({message: 'Incorrect Password' , status: false});
                }
            })

            //Below is for password matching without using bcrypt
            // if(incomingPassword === user[0].password) return res.status(200).json({message: 'User logged in successfully' , status: "true"});
            // else return res.status(401).json({message: 'Incorrect Password' , status:"false"});
        }else {
            return res.status(404).json({message: 'User Not Found'});   
        }
            
    
    }catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function changeUserPassword(req, res) {
    
    try {
        let incomingNewPassword = req.body.password;

        ////Lets hash the incoming new password 
        let saltRounds = 10;
        const hashedPassword = await bcrypt.hash(incomingNewPassword, saltRounds);
        console.log("Hashed Password We Got IS ==> " + hashedPassword);

        await LogicpoolUsers.findByIdAndUpdate(
            { _id: req.params.id}, 
            { password: hashedPassword}, 
            {new: true}
        );

        res.status(201).json({message: 'New Password Set Successfully' , status: true});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }

    
}


module.exports = {
    userRegistration,
    userLogin,
    changeUserPassword
    
}
