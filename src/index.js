const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const {createRoles} = require('./libs/initialSetup');

const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const servicesRoutes = require('./routes/services.routes');
const mailerRoutes = require('./routes/mailer.routes');

const app = express();
require('./db');
createRoles();

const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFound');

//  Server configs
const { config } = require('./config/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors());
app.use(helmet());
if (config.DEV) {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/submit', mailerRoutes);

// Error 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Listening on: http://localhost:${config.PORT}`);
})
