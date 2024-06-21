const app = require('./src/server');
const dbCon = require('./src/config/dbcon');
const PORT = 3000;

dbCon().then(res => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.log("Ha ocurrido un error");
})















// const URL = 'https://students-api.up.railway.app/movies';

// fetch(URL).then(response => {
//     return  response.json();
// }).then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.error(error);
// });

// const http = require('http');

// http.createServer((req, res) => {
//     console.log('Request received');
    
//     if(req.url == '/movies'){
//         res.write('Movies request received');
//         res.end();
//     }

//     if(req.method === 'GET'){
//         res.write('GET request received');
//         res.end();
//     }

// }).listen(3000);