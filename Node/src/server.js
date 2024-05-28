import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    res.send("Docker run its own node now,")
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})

