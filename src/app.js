const express = require("express");
require("./db/conn");

const Student = require("./models/user");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

// create a new student
// Post API without async await
// app.post("/home", (req, res) => {
//     console.log(req.body);

//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// }); 



// POST api using Async await
app.post("/home", async(req, res) => {
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
app.get('/home',async(req, res)=>{
    try{
        const user = await Student.find()
        res.status(200).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})


// get a reposnse by particular id or name for Id we use findById and for anyother key we use findOne 
app.get('/home/:email',async(req, res)=>{
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
