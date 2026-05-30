import express from "express" 
const app= express()


app.get("/", (req,res)=>{
     res.json(
        {
        msg:"server started"
    }
     )
})

app.listen(2000, ()=>{
    console.log('server started at 2000}')
})