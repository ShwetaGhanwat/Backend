const mongoose =require("mongoose")

mongoose.set("strictQuery",false)

const db = ()=>{
    return mongoose.connect("mongodb+srv://Shwetaa:Shwetaa@instaclone.r7kpqqv.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("CONNECTED")
    }).catch((e)=>{
        console.log(e.message)
    })
    
}
module.exports=db;