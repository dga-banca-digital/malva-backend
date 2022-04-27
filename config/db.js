const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://dga-banca-digital:Noviembre2021@cluster0.qf9mk.mongodb.net/clients?retryWrites=true&w=majority'
/* 
module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log('Conexion correcta')
                }
            }
        )
    }
    connect();
}

 */

module.exports = () => {
    try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        DB_URI,
        { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
    } catch (e) {
    console.log("could not connect to MongoDB");
    }
}