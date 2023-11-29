const express = require('express')


app.get("/", function(req, res){
    res.send("<h1>Things are working!</h1>");
})


// starts the server via express on Port 3000
app.listen(3000, function(){
    console.log("Server running on Port 3000!");
});