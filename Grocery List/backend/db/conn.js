const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/grocery", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log(e);
})