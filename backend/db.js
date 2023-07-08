const mongoose = require("mongoose");
const mongoURI =
  "mongodb://ahaaram:mern@ac-bo9f6uv-shard-00-00.esajkmx.mongodb.net:27017,ac-bo9f6uv-shard-00-01.esajkmx.mongodb.net:27017,ac-bo9f6uv-shard-00-02.esajkmx.mongodb.net:27017/mernahaar?ssl=true&replicaSet=atlas-8begqh-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, res) => {
    if (err) {
      console.log("---", err);
    } else {
      console.log("Connected Successfully");
      const fetched = mongoose.connection.db.collection("tabemono");
      fetched.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection(
          "foodCategory"
        );
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.tabemono = data;
            global.foodCategory = catData;
          }
        });
        // if(err) console.log(err);
        // else {
        //     global.tabemono = data;
        // }
      });
    }
  });
};

module.exports = mongoDB;
