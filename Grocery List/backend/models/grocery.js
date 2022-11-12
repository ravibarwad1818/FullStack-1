const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({   
    groceryItem : {
        type:String
    },
    isPurchased : {
        type:String
    }
})

const Item = new mongoose.model("Item", itemSchema);

module.exports = Item;