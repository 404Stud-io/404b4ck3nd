const express = require('express');
const router = express.Router();

const servicesCtrl = require('../controllers/services.controller')
const authJwt = require('../utils/middlewares/authToken')

router.get('/', servicesCtrl.getServices)
router.get('/:serviceId', servicesCtrl.getService)
router.post('/', [authJwt.verifyToken, authJwt.isUser], servicesCtrl.createService)
router.put('/:serviceId', [authJwt.verifyToken, authJwt.isUser], servicesCtrl.updateService)
router.delete('/:serviceId', [authJwt.verifyToken, authJwt.isUser], servicesCtrl.deleteService)

module.exports = router;