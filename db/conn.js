
const { MongoClient } = require('mongodb');
const { CLOSING } = require('ws');
const uri = "mongodb+srv://anika123:anika123@cluster0.vxql7.mongodb.net/project-pitch?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnetion;
module.exports={
    connectToDatabase: function(callback){
        client.connect(function(err,db){
            if(err || !db){
                return callback(err)
            }
            dbConnetion=db.db('project-pitch')
            console.log('Connected to db')

            return callback();
        })
    },
    getDb:function(){
        return dbConnetion;
    }

}


/* 
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  }); 
*/