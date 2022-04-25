const express = require('express');
const cors = require('cors');
// const res = require('express/lib/response');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
// user: dbuser1 // pass: .vT7A@K#CZ_qDyV
const uri = "mongodb+srv://dbuser1:.vT7A@K#CZ_qDyV@cluster0.pgbec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
  try{
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");
    const user = {name: "Mahia Mahi", email: "mahia@mahi.com"};
    const result = await userCollection.insertOne(user);
    console.log(`user inserted with ID : ${result.insertedId}`)
  }finally{
    // await client.close();
  }
}
run().catch(console.dir);
app.use(cors());
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Running my Crud Server')
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})



/*
const uri = "mongodb+srv://***:***@http://cluster0.vwx9p.mongodb.net/myFirstDatabase...";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });