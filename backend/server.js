const express=require('express');
const bodyParser=require('body-parser');
const routes=require('./routes/routes');
const cors=require('cors');
 
const port=5000;
const app=express();
app.use(cors())
  
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.use('/api', routes);

