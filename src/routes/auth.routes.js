const express = require('express');
const router = express.Router();

const { createUserSchema, userIdSchema } = require('../utils/schemas/users');
const validationHandler = require('../utils/middlewares/validationHandler');

const authCtrl = require('../controllers/auth.controller');

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post('/signup', validationHandler(createUserSchema), authCtrl.signUp);
router.post('/login', authCtrl.logIn);

module.exports = router;