const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.put('/:id', logController.updateLog);
router.delete('/:id', logController.deleteLog);

module.exports = router;