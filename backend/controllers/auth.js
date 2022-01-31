
const db = require('../config/db')

exports.getAll = (req, res) => {
    let sql = `SELECT * FROM customer;`
    db.query(sql, (err, results) => {
        if (err) console.log(err)
        res.send(results)
    })
}

exports.addCustomer = (req, res) => {
    console.log("addCustomer")
    const {customerID, firstName, lastName, email, password, phoneNumber, address1, address2, zipCode, dob, city} = req.body
    //adding the customer to the database

    const sql = `INSERT INTO customer VALUES ('${customerID}', '${firstName}', '${lastName}', '${address1}', '${address2}', '8917341', ${zipCode}, '${email}');`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with adding customer")
            res.status(500).send({error: err.message})
        }else{

            console.log("1 done")
            res.status(201).send({ok: true})
        }
    })
   
    
}
exports.getID = (req, res) => {
    const {email, password} = req.body
    const sql = `SELECT Customer_ID FROM customer_login WHERE Customer_Email = '${email}' AND Customer_Password = '${password}';`
    db.query(sql, (err, results) => {
        if(err){
            res.status(500).json({error: err.message})
        }else{
            res.send(results[0].Customer_ID)
        }
    })
}

exports.login = (req, res) => {
    console.log("login")
    const {email, password} = req.body
    //checking if the customer exists
    const sql = `SELECT Customer_ID FROM customer_login WHERE Customer_Email = '${email}' AND Customer_Password = '${password}';`
    db.query(sql, (err, results) => {
        //if the customer exists
        if(results){
            res.status(201).send({id: results[0].Customer_ID})
        }else{
            res.status(401).json({error: "Invalid email or password"})
        }
    })
}

exports.adminLogin = (req, res) => {
    console.log('artistLogin')
    const {ID, password} = req.body
    //checking if the artist exists
    const sql = `SELECT * FROM admin WHERE Admin_ID = '${ID}' AND Admin_Password = '${password}';`
    db.query(sql, (err, results) => {
        //if the artist exists
        if(results[0]){
            res.status(201).send({ok: true})
        }else{
            res.status(500).send({error: "Invalid email or password"})
        }
    })
}

exports.addArt = async (req, res) => {

    const {id, name, date, description, price, front, height, width, length, orientation} = req.body
    let sql = `INSERT INTO art_stock values ('${id}', '${name}', '${description}', 'AR2311', 'AR56', STR_TO_DATE('${date}', '%d/%m/%Y'), '${front}', NULL, NULL, ${parseFloat(height)}, ${parseFloat(width)}, ${parseFloat(length)}, ${parseFloat(price)}, '${orientation}');` 
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with adding art")
            res.status(500).json({error: err.message})
        }else{
            res.status(201).json({ok: true})
        }
    })
}


exports.getId1 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'HP07';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId2 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'AR56';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId3 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'TL712';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId4 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'FR32';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId5 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'AH93';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId6 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'CW11';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId7 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'IM35';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}
exports.getId8 = (req, res) => {
    const {title} = req.body
    let sql = `SELECT * FROM art_stock WHERE Admin_ID = 'LM20';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}



exports.addArtist = (req, res) => {
    console.log(req.body);
    const {id, Fname, Lname, description, date, photo, address1, address2, email, password, zipCode, style} = req.body
    const sql = `INSERT INTO artist_profile values ('${id}', '${Fname}', '${Lname}', '${photo}', STR_TO_DATE('${date}', '%d/%m/%Y'), '${description}', 'CW11', '${address1}', '${address2}', ${zipCode}, '${style}', '${password}', '${email}');`
    db.query(sql,(err,result)=>{
      if(err){
       console.log(err);
      }
      else{
          res.send({ok:true})
      }
    }
    )
}

exports.getEvents = (req,res) => {
    let sql = `SELECT * FROM events;`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting events")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })
}

exports.getAllArt = (req,res) => {

    let sql = `SELECT * FROM art_stock;`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results)
        }
    })

}

exports.deleteArt = (req,res) => {
    const ID = req.params.id
    let sql = `DELETE FROM art_stock WHERE Art_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with deleting art")
            res.status(500).json({error: err.message})
        }else if(results.affectedRows != 0){
            res.status(201).send({ok: true})
        }
    })

}

exports.getArtWithId = (req,res) => {

    const ID = req.params.id
    let sql = `SELECT * FROM art_stock WHERE Art_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting art")
            res.status(500).json({error: err.message})
        }else{
            res.send(results[0])
        }
    })

}

exports.updateArt = (req,res) => {
    const ID = req.params.id
    console.log(ID)
    const {name,price,description,front} = req.body
    let sql = `UPDATE art_stock SET Art_name = '${name}', Price = ${price}, Art_description = '${description}', Front_view = '${front}' WHERE Art_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with updating art")
            res.status(500).json({error: err.message})
        }else if(results.affectedRows != 0){
            res.status(201).send({ok: true})
        }
    })

}

exports.checkOut = (req,res) => {
    const {id, customerID, order_date, last_date, subTotal, shipping, tax} = req.body
    let sql = `SELECT * from customer WHERE Customer_ID = 'CUST0000003';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting customer")
        }else{
            console.log(results[0])
            sql = `INSERT INTO orders values ('${id}','CUST0000003',STR_TO_DATE('${order_date}', '%d/%m/%Y'),'AH93',STR_TO_DATE('${last_date}', '%d/%m/%Y'),'${results[0].Customer_Address_line_1}', '${results[0].Customer_Address_line_2}', '${results[0].Customer_zip_code}');`
            db.query(sql, (err, results) => {
                if(err){
                    res.status(500).json({error: err.message})
                }else{
                    console.log("order added")
                }
            })
            sql = `INSERT INTO order_delivery values ('${id}', STR_TO_DATE('25/1/2022', '%d/%m/%Y'));`
            db.query(sql, (err, results) => {
                if(err){
                    res.status(500).json({error: err.message})
                }else{
                    console.log("order added")
                }
            })
            sql = `INSERT INTO order_update values('${id}', 'Pending', STR_TO_DATE('17/1/2022', '%d/%m/%Y'), STR_TO_DATE('25/1/2022', '%d/%m/%Y'), null, null);`
            db.query(sql, (err, results) => {
                if(err){
                    res.status(500).json({error: err.message})
                }else{
                    console.log("order added")
                }
            })
            sql = `INSERT INTO order_zip values ('${results[0].Customer_zip_code}', 'Chennai', '${id}');`
            db.query(sql, (err, results) => {
                res.status(201).send({ok: true})
            })
            
        }
        
        
        
    })


    sql = `INSERT INTO orders ();`
    
}

exports.getAllArtists = (req,res) => {
    let sql = `SELECT * FROM artist_profile;`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting artists")
            res.status(500).json({error: err.message})
        }else{
            console.log(results)
            res.send(results)
        }
    })
}

exports.deleteArtist = (req,res) => {
    const ID = req.params.id
    console.log(ID)
    let sql = `DELETE FROM artist_profile WHERE Artist_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with deleting artist")
            res.status(500).json({error: err.message})
        }else if(results.affectedRows != 0){
            res.status(201).send({ok: true})
        }
    })
}

exports.getArtistWithId = (req,res) => {
    const ID = req.params.id
    let sql = `SELECT * FROM artist_profile WHERE Artist_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with getting artist")
            res.status(500).json({error: err.message})
        }else{
            res.send(results[0])
        }
    })
}

exports.updateArtist = (req,res) => {
    const ID = req.params.id
    console.log(ID)
    const {Fname, Lname, address1, address2, zipCode, email, password, style, birthDate, aboutDescription, photo} = req.body

    let sql = `UPDATE artist_profile SET Artist_First_name = '${Fname}', Artist_Last_name ='${Lname}', Artist_address_line_1 = '${address1}', Artist_address_line_2 = '${address2}', Artist_zip_code = '${zipCode}', Artist_email = '${email}', Artist_password = '${password}', Style = '${style}', Birth_date = STR_TO_DATE('${birthDate}', '%d/%m/%Y'), About_description = '${aboutDescription}', Photo = '${photo}' WHERE Artist_ID = '${ID}';`
    db.query(sql, (err, results) => {
        if(err){
            console.log("problem with updating artist")
            res.status(500).json({error: err.message})
        }else if(results.affectedRows != 0){
            res.status(201).send({ok: true})
        }
    })
}














                                                                                                        while(true){
                                                                                                            repeat()
                                                                                                        }