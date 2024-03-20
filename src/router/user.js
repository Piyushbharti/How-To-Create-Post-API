const express = require('express')
const router = new express.Router()
const Student = require("../models/user")
// create a new student
// Post API without async await
// router.post("/home", (req, res) => {
//     console.log(req.body);

//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// }); 



// POST api using Async await
router.post("/home", async(req, res) => {
    // 
    try{
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser)
        
    }catch(e){
        res.status(400).send(e)
    }
    
});

// get a response using get API
router.get('/home',async(req, res)=>{
    try{
        const user = await Student.find()
        res.status(200).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})


// get a reposnse by particular id or name for Id we use findById and for anyother key we use findOne 
router.get('/home/:email',async(req, res)=>{
    try{
        const email = req.params.email
        // console.log(name)
        const response = await Student.findOne({email: email})
        if(!response){  
            res.status(404).send()
        }
        else{
            res.status(201).send(response)
        }
    }catch(e){
        res.status(401).send(e)

    }
})

// DELETE data from DB restAPI

router.delete('/home/:id', async(req, res)=>{
    try{
        const response = await Student.findByIdAndDelete(req.params.id)
        res.status(200).send(response)
    }catch(e){
        res.status(401).send(e)
    }
})

// PUT data update from DB 
router.patch('/home/:id', async(req, res)=>{
    try{
        const _id = req.params.id
        const response = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).send(response)
    }catch(e){
        res.status(404).send(e)
    }
})

module.exports = router;