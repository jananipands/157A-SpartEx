const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const http = require('http');
const cookieSession = require('cookie-session');
const passport = require('passport');

passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'});

require('dotenv').config();
const path = require('path');

const router = express.Router();

const app = express();

var user_id = '';


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end();
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PW,
    port: '3306',
    database: 'spartex'
});

if(db){
    console.log("Connected Successfully!");
} else {
    console.log("Check DB connection");
}

db.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Connection successful!');
    }
});

app.use(
    cookieSession({ name: "session", keys: ["rpbaea"], maxAge: 3 * 24 * 60 * 60 * 1000 })
);

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,PATCH,DELETE",
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.session());

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('this is CORS enabled');
})


// starts the server via express on Port 5000
app.listen(9000, function(){
    console.log("Server running on Port 9000!");
});

// ---------------------------- ROUTES ------------------------------------

app.post("/loginuser", (req, res) => {
    console.log("request", req);
    const sjsu_id = req.body.sjsuid;
    const password = req.body.password;
    
    let query = "SELECT * FROM USER WHERE SJSU_ID = ? AND PASSWORD = ?";
    db.query(query, [sjsu_id, password], (err, results) => {
        if(err){
            res.status(500).send("DB Insertion error!");
        } else {
            if(results.length > 0){
                res.status(200).send(sjsu_id);
                req.session.user = results;
            } else {
                res.status(401).send('Bad credentials!');
            }
        }
    });
});

app.get("/getuseritems", (req, res) => {
    console.log("request", req);
    const id = window.localStorage.getItem("sjsu_id");
    console.log("req.body", req.body);

    console.log(id);

    var items = [];

    let query = 'SELECT * FROM TEXTBOOK WHERE SELLER_ID = ?';
    db.query(query,[id], (err, results) => {
        if(err){
            res.status(500).send("DB Insertion error!");
        } else {
            if(results.length >= 0){
                items.push(...results);
                res.status(200).send('success!')
            } else {
                res.status(401).send('Could not retrieve');
            }
        }
    });

    let query1 = 'SELECT * FROM APPLIANCE WHERE SELLER_ID = ?';
    db.query(query,[id], (err, results) => {
        if(err){
            res.status(500).send("DB Insertion error!");
        } else {
            if(results.length >= 0){
                items.push(...results);
                res.status(200).send('success!')
            } else {
                res.status(401).send('Could not retrieve');
            }
        }
    });

    let query2 = 'SELECT * FROM FURNITURE WHERE SELLER_ID = ?';
    db.query(query,[id], (err, results) => {
        if(err){
            res.status(500).send("DB Insertion error!");
        } else {
            if(results.length >= 0){
                items.push(...results);
                res.status(200).send('success!')
            } else {
                res.status(401).send('Could not retrieve');
            }
        }
    });

    res.json(items);
});


app.post("/adduser", (req, res) => {

    const {sjsu_id, 
        first_name, 
        last_name, 
        password, 
        insta_id, 
        messenger_id, 
        phone_number} = req.body;

    
    let queryContact = "INSERT INTO Contact_Info (SJSU_ID, Phone_Number, insta_id, messenger_id) VALUES (?, ?, ?, ?)";
    db.query(queryContact, [sjsu_id, phone_number, insta_id, messenger_id], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Internal Server Error');
        } else {
            let queryUser = 'INSERT INTO USER (SJSU_ID, Password, First_Name, Last_Name, Contact_Info) VALUES (?, ?, ?, ?, ?)';
            db.query(queryUser, [sjsu_id, password, first_name, last_name, sjsu_id], (errContact, resultsContact) => {
                if (errContact) {
                    console.error('Error inserting contact info:', errContact);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).send('Succesful!');
                }
            });
        }
    });
});

app.post("/addappliance", (req, res) => {
    const {
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    } = req.body;

    let queryAddAppl = "INSERT INTO APPLIANCE (Item_Name, Image_URL, Appearance, Price, Details, Appearance_Color, Seller_ID) "
                        + "VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(queryAddAppl, [
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    ], (err, results) => {
        if(err){
            console.error("Add Appliance: Error Inserting", err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Successful!');
        }
    })
});

app.post("/addfurniture", (req, res) => {
    const {
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    } = req.body;

    let queryAddFur = "INSERT INTO Furniture (Item_Name, Image_URL, Appearance, Price, Details, Appearance_Color, Seller_ID) "
                        + "VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(queryAddFur, [
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    ], (err, results) => {
        if(err){
            console.error("Add Furniture: Error Inserting", err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Successful!');
        }
    })
});

app.post("/addtextbook", (req, res) => {
    const {
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    } = req.body;

    let queryAddTB = "INSERT INTO Textbook (Item_Name, Image_URL, Appearance, Price, Details, Appearance_Color, Seller_ID) "
                        + "VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(queryAddTB, [
        item_name,
        image_url,
        appearance,
        price,
        details,
        appearance_color,
        seller_id
    ], (err, results) => {
        if(err){
            console.error("Add Textbook: Error Inserting", err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Successful!');
        }
    })
});

app.get("/getappliance", (req, res) => {
    db.query("SELECT * FROM APPLIANCE", (err, results) => {
        if(err){
            console.error("Appliance: Error retrieving", err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(results);
            res.status(200).json(results);
        }
    })
});

app.get("/getfurniture", (req, res) => {
    db.query("SELECT * FROM FURNITURE", (err, results) => {
        if(err){
            console.error("Furniture: Error retrieving", err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(results);
            res.status(200).json(results);
        }
    })
});

app.get("/gettextbook", (req, res) => {
    db.query("SELECT * FROM TEXTBOOK", (err, results) => {
        if(err){
            console.error("Furniture: Error retrieving", err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(results);
            res.status(200).json(results);
        }
    })
});

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    user_id='';
})




