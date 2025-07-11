import express from 'express'
 
const app = express()

app.get('/',(req,res)=>{
    res.send("hello from express")
})


app.put('/',(req,res)=>{
    res.send('hello from put')
})
app.delete('/',(req,res)=>{
    res.send('hello from delete')
})
app.post('/',(req,res)=>{
    res.send('hello from post')
})

app.listen(3000,()=>{

})