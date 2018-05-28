const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DS_cards = require('./database/DS_cards')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req,res)=>{
    DS_cards.getAllCards().then(data=>{
        res.send(data)
    })
})

app.post('/card/new', (req,res)=>{
    const title = req.body.title;
    const status = req.body.status;
    const notes = req.body.notes;
    const assigned_to = req.body.assigned_to;
    const priority = req.body.priority;
    DS_cards.addNewCard(title, status, notes, assigned_to, priority).then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
})




app.listen(PORT, ()=>{
    console.log('Listening on port 8080')
})