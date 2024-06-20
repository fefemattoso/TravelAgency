const express = require('express');
const router = express.Router();
const hoteis = require('./controllers/hoteis')
const destinos = require('./controllers/destinos')
const telefoneController = require('./controllers/telefones')
const pontos_turisticos = require('./controllers/pontosTuristicos')

router.get('/', (req, res) => {
        res.send('Hello World!');
});

router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.put('/destinos/:id', destinos.update);
router.delete('/destinos/:id', destinos.del);

router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.put('/hoteis/:id', hoteis.update);
router.delete('/hoteis/:id', hoteis.del);

router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);
router.put('/telefones/:id', telefones.update);
router.delete('/telefones/:id', telefones.del);

router.post('/pontosTuristicos', pontosTuristicos.create);
router.get('/pontosTuristicos', pontosTuristicos.read);
router.put('/pontosTuristicos/:id', pontosTuristicos.update);
router.delete('/pontosTuristicos/:id', pontosTuristicos.del);

module.exports = router;