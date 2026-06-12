const rateLimit = require('express-rate-limit');

// general routes
const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        message: 'Too many requests, try again after 5 minutes'
    }
});

// auth routes
const authRateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        message: 'Too many login attempts, try again after 5 minutes'
    }
});

module.exports = { rateLimiter, authRateLimiter };