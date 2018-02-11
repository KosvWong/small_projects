const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// const mongojs = require('mongojs');
// const router = express.Router();
// const Schema = mongoose.Schema;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/pr_man/db/'); 

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /pr_man/db/")
});

const HouseSchema = new mongoose.Schema({
                            name: String,
                            room: Number,
                            t_capacity: Number,
                            c_capacity: '',                                            
                                number: Number,
                                street: String,
                                city: String,
                                state: String,
                                zip: Number                            
                        })

const TenantSchema= new mongoose.Schema({
                            first_name: String,
                            last_name: String,
                            e_mail: String,
                            phone: String,
                            house: String,
                            Entrance_date: Date
                        })

const House = mongoose.model('House', HouseSchema )
const Tenant = mongoose.model('Tenant', TenantSchema)


// newHouse.save().then(() => {
//     console.log(newHouse)
// })

//return all houses
app.get("/houses", (req, res) => {
    House.find({})
        .then((houses) => {
            console.log(houses)
            res.json(houses)
        })
})

app.get("/tenants", (req, res) => {
    Tenant.find({})
        .then((tenants) => {
            console.log(tenants)
            res.json(tenants)
        })
})

//add a new house
app.post("/newhouse", (req, res) => {
    console.log(req.body)
    let newHouse = new House({
        name: req.body.name,
        room: req.body.room,
        t_capacity: req.body.t_capacity,
        c_capacity: req.body.c_capacity,
        
            number: req.body.number,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        
    })


//save the new house to the database
newHouse.save()
    .then((newHouse) => {
        res.json(newHouse)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


app.post("/newtenant", (req, res) => {
    console.log(req.body.first_name)
    let newTenant = new Tenant({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        e_mail: req.body.e_mail,
        phone: req.body.phone,
        house: req.body.house,
        enrance_date: req.body.entrance_date        
    })

//save the new tenant to the database
newTenant.save()
    .then((newTenant) => {
        console.log(newTenant)
        res.json(newTenant)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })

})

//Delete a house
app.delete("/houses/:id", (req,res) => {
    House.findByIdAndRemove({_id: req.params.id})
        .then((removedHouse) => {
            console.log("Here")
            console.log(_id)
            res.json({status: 'removed'})
        })
        .catch((err) => {
            res.json(err)
        })
})

app.delete("/tenants/:id", (req, res) =>{
    Tenant.findByIdAndRemove({_id: req.params.id})
        .then((removedTenant) => {
            console.log(removedTenant._id)
            res.json({status: 'removed'})
        })
})

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})
