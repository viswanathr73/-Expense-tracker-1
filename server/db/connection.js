const monogoose = require('mongoose')

const conn =monogoose.connect(process.env.URL)
.then(db=>{
    console.log("Database connected");
    return db;
}).catch(err=>{
    console.log("connection error");
});

    module.exports =conn;
