const express = require('express');
const router = express.Router();

const comboServiceCtrl = require('../controllers/comboService.controller');
const authJwt = require('../utils/middlewares/authToken');

router.get('/', comboServiceCtrl.getComboService)
router.post('/', [authJwt.verifyToken, authJwt.isUser], comboServiceCtrl.createComboService)
router.put('/:comboServiceId', [authJwt.verifyToken, authJwt.isUser], comboServiceCtrl.updateComboService)
router.delete('/:comboServiceId', [authJwt.verifyToken, authJwt.isUser], comboServiceCtrl.deleteComboService)

module.exports = router;