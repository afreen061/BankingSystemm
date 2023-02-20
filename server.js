const express = require('express');
const path = require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');




const port=8000;

  
const app=express();
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended:false
}));
var connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Afreen123#",
  database:"customers",
  
});
connection.connect((err)=>{
  if(err) throw err;
  
    console.log(`MongoDB connected`);
  
});
//...


app.get('/customer', function (req, res,next) {
  connection.query('SELECT *FROM viewcustomer ', function (error, rows) {
    if (error) {
      throw error;
      
    } else {
      res.render('customer', { data: rows })
      //console.log(rows);
    }
  })
})


app.get('/trans', function (req, res,next) {
  connection.query('SELECT *FROM transaction ', function (error, rows) {
    if (error) {
      throw error;
      
    } else {
      res.render('transfer', { transdata: rows })
      //console.log(rows);
    }
  })
})







app.post('/users', function (req, res) {
const SAcc=req.body.Sacc;
const RAcc=req.body.Racc;
  const amount = req.body.amount;
  const to = req.body.to;
  const from = req.body.from;

  var qe = "INSERT INTO `transaction`( `SAcc`, `From`,`to`, `Amount`,`RAcc`)VALUES(?,?,?,?,?)";
  const VALUES = [SAcc,from, to, amount,RAcc];


  connection.query(qe, VALUES, function (err, rows) {
      if (err) {
          throw err;
      } else {

        console.log('transfer');

      }
  });
  var sql = "SELECT * FROM transaction";
    connection.query(sql, function (err, rows) {
        if (err) {
            throw err;
        } else {

            res.render('transfer', {
              transdata: rows
            });

        }
    });

    var updt1 = "UPDATE viewcustomer  SET Balance=Balance+? WHERE Acc=?";

    const VAL = [parseInt(amount), RAcc];
    connection.query(updt1, VAL, function (err, rows) {
        if (err) {
            throw err;
        } else {

            console.log("Amount Updated");

        }
    });

    var updt2 = "UPDATE viewcustomer  SET Balance=Balance-? WHERE Acc=?";

    const VAL2 = [parseInt(amount), SAcc];
    connection.query(updt2, VAL2, function (err, rows) {
        if (err) {
            throw err;
        } else {
            console.log("Amount Updated");
            
            
            
        }
    });
    
});
  



app.set("view engine","ejs");

//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));


//app.use(express.static("views"));//imptant

app.get('/',(req,res)=>{
  res.render("index");
 })
 app.get('/transferr',(req,res)=>{
  res.render("transferrcus.ejs");
 })
 app.get('/transs',(req,res)=>{
  res.render("transfer.ejs");
 })
 app.get('/customer',(req,res)=>{
  res.render("customer.ejs");
 })
 app.get('/home',(req,res)=>{
  res.render("index.ejs");
 })
 app.get('/trans',(req,res)=>{
  res.render("transfer.ejs");
 })

app.listen(port ,()=>{
  console.log(`listening to port ${port}`);
});

