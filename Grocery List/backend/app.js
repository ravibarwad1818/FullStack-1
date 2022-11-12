const express = require("express");
require("./db/conn");
const Item = require("./models/grocery");
const app = express();
const port = process.env.Port || 5000;

app.use(express.json());

app.post("/", async (req,res) => {
    const item = new Item({
        groceryItem : req.body.groceryItem,
        isPurchased : req.body.isPurchased
    })
    try{
        const i1 = await item.save();
        res.json(i1);
    }
    catch(e){
        res.send(e);
    }
})

app.get("/", async (req,res) => {
    try{
        const item = await Item.find();
        res.json(item)
    }
    catch(e){
        res.send(e);
    }
})

app.patch("/:id", async (req,res) =>{
    try{
        const item = await Item.findById(req.params.id)
        item.groceryItem = req.body.groceryItem,
        item.isPurchased = req.body.isPurchased
        const i1 = await item.save()
        res.json(i1)
    }
    catch(e){
        res.send(e);
    }
})

app.delete("/:id", async(req,res) => {
    try{
        const item = await Item.findById(req.params.id);
        const i1 = await item.remove()
        res.send(i1);
    }catch(e){
        res.send(e);
    }
})

app.listen(port, () => {
    console.log("Connection is setup at " + port);
})