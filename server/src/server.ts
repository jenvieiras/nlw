import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de Usuários");

    response.json([
        'Ana',
        'Maria',
        'John',
        'Caleb'
    ]);
});
 
app.listen(3333);