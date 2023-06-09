const express = require('express');

const app = express();

const PORT = 7000;

app.get('/', (req, res) => {
    res.send("Welcome to FAQ api")
})

const FAQ = [
    {
        about:"companies",
        questions: {
            Q1: "What are you selling? ",
            Q2: "What does the guarantee cover?",
            Q3: "Where can I find you? ",
            Q4: "How might I get in touch with you ?"
        }
    },{
        about:"shipping",
        questions:{
            Q1:"What time will the products be dispatched?",
            Q2:"Where do your items come from?",
            Q3:"Do you have merchandise exchanges?"
        }
    },{
        about:"Fashion, Apparel & Accessories",
        questions:{
            Q1:"What is the situation with my request?", 
            Q2:"My markdown code isn’t working. What do I do?", 
            Q3:"Where is Clothing Shop Online based? ",
            Q4:"Where are your items transported from? ",
            Q5:"Would I be able to facilitate my delivery? ",
            Q6:"Would you be able to transport globally or measure worldwide Visas? ",
            Q7:" How might I pay for my request? ",
            Q8:"How might I check the situation with my request? ",
            Q9:" Would I be able to drop or change my request? ",
            Q10:" Would I be able to trade my request?", 
            Q11:" How would I return my request? ",
            Q12:"What do I do if my request is harmed? ",
            Q13:" For what reason did I just get part of my request? ",
            Q14:" I got some unacceptable products, what do I do? "
        }
    }
]

//Routes
app.get('/faq/:name',(req,res)=>{
    const pname=req.params.name;
        if(pname=='companies'){
            res.json(FAQ[0].questions);
        }
        else if(pname=='shipping'){
            res.json(FAQ[1].questions);
        }
        else if(pname=='fashion'){
            res.json(FAQ[2].questions)
        }
        else{
            res.json("data is unavailable");
        } 
        console.log(pname);
})

app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) });