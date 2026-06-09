require('dotenv').config(); // load environment variables
const app = require('./app');
const { sequelize } = require('./model'); // import sequelize instance

const PORT = process.env.PORT || 3000;

// Test DB connection and sync models
(async() => {
    try {
        await sequelize.authenticate(); // test connection
        console.log(' Database connected');

        console.log('Models synchronized');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1); // exit process if DB connection fails
    }
})();