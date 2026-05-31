import express from "express" 
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import {auth} from "./utils/auth.js"
const app= express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())


app.all("/api/auth/*splat", toNodeHandler(auth));
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