const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controller/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // same pattern as all your other routes

// GET /api/dashboard
router.get('/', getDashboard);

module.exports = router;