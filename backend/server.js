const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello!");
});

// starts the server via express on Port 3000
app.listen(3000, function(){
    console.log("Server running on Port 3000!");
});