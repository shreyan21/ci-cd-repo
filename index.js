import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json());

app.get('/home', async (req, res) => {

   return res.status(200).json({message:'It is home route' })


})
app.get('/:name',async(req,res)=>{
   return res.send(`Hello ${req.params.name}`)
})


app.listen(4000)
