const express = require('express');
const connectToMongo = require('./db')
const bodyParser = require('body-parser')
const User = require('./models/User')


const path = require('path')

const fs = require('fs');

const app = express();

connectToMongo();

const port =3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/demo",  (req, res)=>{
//     res.render('demo', { title: 'Hey harsh', message: 'Hello there! thnks for teaching how to use pug'})
// })

app.get("/",  (req, res)=>{
    res.send('hello world');
})



// app.post("/signup",  async (req, res)=>{
//     const name = req.body.name;
//     const emaile= req.body.email;
//     const pass = req.body.pass;
 
//     // let write = `${naam} ${age} ${gender} ${gender} ${caste} ${address}`;
//     // fs.writeFileSync('output.txt',write)
//     // const params = {'message':'form has been submitted success fully'}


//     let exists = User.find({email:emaile})

//     if(exists){
//         res.send("not added");
//     }else{


  
    
//     let user = await User.create({
//         name: name,
//         password: pass,
//         email: emaile,
//     });

//     user.save

//     console.log(name);
//     console.log(emaile);
//     console.log(pass);
//     res.send('data added');
// }   

// })




// todo :   1.  login endpoint -------  post email , password   ------validate from database that entered password matching or not fromm desired result
// todo : 2. signup -------- post email , name , password , confirm password -----------validate passwords or confirm password ----save the data in db if noother simlar data exists ..


app.listen(port , ()=>{
    console.log(`Application has been successfully started on port ${port}`)
})