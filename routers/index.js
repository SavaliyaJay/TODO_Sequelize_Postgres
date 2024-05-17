const express = require('express');
const { fetchAllList, insertList } = require('../controllers/crud.controller');

const router = express.Router();

router.get('/', fetchAllList);
router.post('/', insertList);
// router.put('/:id', );
// router.delete('/:id', );

module.exports = router;

