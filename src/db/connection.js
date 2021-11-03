const { MongoClient } = require("mongodb");
require("dotenv").config();

connection = async (crudFunc, dataObj) => {
  try {
    const client = new MongoClient(process.env.MONGO - URI);

    await client.connect();
    console.log("successfully connected");
    const db = client.db("m29");
    const collection = db.collection("movies");
    crudFunc(collection, dataObj);

    //you can only manipulate the database between defining the collection and closing the client

    client.close();
    console.log("client closed");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
