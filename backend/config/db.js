require('dotenv').config()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_ROOT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

db.connect((err)=>{
    if(!err)
        console.log("DB is connected")
    else
        console.log("DB connection failed \n Error:"+JSON.stringify(err,undefined,2))
})

module.exports = db