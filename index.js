const express = require("express");
const {validate} = require("./validate");


const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    data ={
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
          "name": "Princewill Okeugo",
          "github": "@PcUtility",
          "email": "princewillutility@gmail.com",
          "mobile": "08139283342",
          "twitter": "null"
        }
    }
    res.status(200).send(data)
})



app.post('/validate-rule',(req,res)=>{
    validate(res,req.body)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});