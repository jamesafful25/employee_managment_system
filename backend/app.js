const express = require('express');
const app = express();

// Trust AWS ALB / reverse proxy
app.set('trust proxy', 1);

const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

// route imports
const authRoutes = require('./route/authRoutes');
const employeeRoutes = require('./route/employeeRoutes');
const departmentRoutes = require('./route/departmentRoutes');
const attendanceRoutes = require('./route/attendanceRoutes');
const leaveRoutes = require('./route/leaveRoutes');
const leaveTypeRoutes = require('./route/leaveTypeRoutes');
const payrollRoutes = require('./route/payrollRoutes');
const performanceRoutes = require('./route/performanceRoutes');
const reportRoutes = require('./route/reportRoutes');
const uploadRoutes = require('./route/uploadRoutes');
const dashboardRoutes = require('./route/dashboardRoutes');

// middleware imports
const passport = require('./config/passport');
const { rateLimiter, authRateLimiter } = require('./middleware/rateLimiterMiddleware');
const errorHandleMiddleware = require('./middleware/errorHandleMiddleware');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security middleware
app.use(helmet());

app.use(cors({
    origin: '*',
    credentials: false
}));

// rate limiting
app.use(rateLimiter);

// passport
app.use(passport.initialize());

// health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'emp-mgmt-api',
        uptime: process.uptime()
    });
});

// root endpoint
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

// routes
app.use('/api/auth', authRateLimiter, authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/leave-types', leaveTypeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/dashboard', dashboardRoutes);

// static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// error handler (must be last)
app.use(errorHandleMiddleware);

module.exports = app;