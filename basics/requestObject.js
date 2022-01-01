const express = require ('express');

const app = express();

app.use(express.json());

app.get('/:name', (req, resp) => {
    console.log(req.method);
    console.log(req.params.name);
    resp.status(200).json({
        message: 'All data about the request.'
    });

});

app.get('/', (req, resp) => {
    console.log(req.method);
    console.log(req.query);
    resp.status(200).json({
        message: 'All data about the request.'
    });

});

app.post('/', (req, resp) => {
    console.log(req.body);
    resp.end('Body Value for name is : '+ req.body.name);
});


app.listen(3000, () =>{
    console.log('Server is started on port 3000.');
});