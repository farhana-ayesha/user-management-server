import express from 'express';

const app = express();
import cors from 'cors'
app.use(cors())
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) =>{
    res.send('users are comming soon');
})
 
 const users =[
    {id:1, name: 'Jhon Doe', email:'jhon.doe@example.com'},
    {id:2, name:'Jane Smith', email:'jane.smith@example.com'},
    {id:3, name:'Bob Johnsn', email:'bob.johnson,com'},
    {id:4, name:'Alice Williams',email:'alice.williams@example.com'}

 ]
app.get('/users',(req,res) => {
    res.send(users);
})
app.listen(PORT, ()=> [
    console.log(`Server is running on port ${PORT}`)
])