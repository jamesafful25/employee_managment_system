require('dotenv').config();
const { Employee } = require('./model');
const { hashPassword } = require('./utils/passwordHelper');
const { sequelize } = require('./model');

(async() => {
    try {
        await sequelize.authenticate();
        const hashed = await hashPassword('Afful@1234');
        await Employee.update({ password: hashed, is_password_changed: true }, { where: { email: 'james.afful47@gmail.com' } });
        console.log('Done! Password reset to: Afful@1234');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();