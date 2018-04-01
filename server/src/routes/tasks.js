import express from 'express';
const router = express.Router();


router.get('/', function(req, res) {
  res.json({'foo':'bar'});
});

router.post('/', function(req, res) {

});

router.get('/:uuid', function(req, res) {

});

router.put('/:uuid', function(req, res) {

});

router.delete('/:uuid', function(req, res) {

});

export default router;
