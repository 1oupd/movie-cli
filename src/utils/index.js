const addMovie = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj);
    console.log("successfully added movie");
  } catch (error) {
    console.log(error);
  }
};
