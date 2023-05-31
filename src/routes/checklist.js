const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    console.log('Hello...');
    response.send();
});

router.post('/', (request, response) => {
    console.log(request.body);
    response.status(200).json(request.body);
});

router.get('/:id', (request, response) => {
    console.log(request.params.id);
    response.send(`ID: ${request.params.id}`);
});

router.put('/:id', (request, response) => {
    console.log(request.body);
    response.send(`PUT ID: ${request.params.id}`);
});

router.delete('/:id', (request, response) => {
    console.log(request.body);
    response.send(`DELETE ID: ${request.params.id}`);
});

module.exports = router;