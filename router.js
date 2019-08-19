var express = require('express');
var router = express.Router();
var db = [];

//develop a similar task 
// create a dg(array), push number into db, list db, delete number, sum up 
router.get('/', (req,res)=>{
res.send('<h1>hello world.....</h1>');
});

//route parameters, push number into db 
router.get('/addNumber/:number', (req,res)=>{
    let number = req.params.number;
    db.push(number);
    res.send('add number '+ number +  ' to db sucessfully, <br> The current db is:' + db ); 
})

//delete number from db, splice 
router.get('/deleteNumber/:number', function (req,res){
    //http:localhost:8000/deleteNumber/5
    //number = 5
    let number = req.params.number;
    let index = db.indexOf(number);
    //if this number doesn't exist in the db 

    if (index == -1){ //if number doesn't exist, it would be -1
        res.send('<h1>Number you want to delete does not exist </h1>')
    } else{
        db.splice(index,1);
        res.send('deleted ' + number + ' successfully <br> So, the current database is:' + db); 
    }
}); 

//sum up, for loop, while loop or forEach 
var sum = 0;
router.get('/total', (req,res)=>{
    db.forEach(element => {
        sum += parseInt(element);
    })
    res.send('The current db is: ' + db+ '<br> Sum of the result is: ' + sum ); 
});
module.exports = router
