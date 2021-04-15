const app = require('./app');

app.listen(app.get('port'),(req,res)=>{
    console.log('Server listen in http://localhost:'+app.get('port'));
});