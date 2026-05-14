const { getLeaveBalance, getMyLeaves } = require('./leaveService');
const { getMyAttendance } = require('./attendanceService');
const { getAllEmployees } = require('./employeeService');
const { getAllDepartments } = require('./departmentService');
const { getAllPayroll } = require('./payrollService');

const getEmployeeDashboard = async(employeeId) => {
    const today = new Date().toISOString().split('T')[0];

    const [leaveBalance, leavesResult, attendanceResult] = await Promise.all([
        getLeaveBalance(employeeId),
        getMyLeaves(employeeId, { limit: 5, page: 1 }),
        getMyAttendance(employeeId, { date: today, limit: 1, page: 1 }),
    ]);

    const todayRecord = attendanceResult.data && attendanceResult.data[0];
    const clockedIn = !!(todayRecord && todayRecord.clock_in && !todayRecord.clock_out);

    return {
        leaveBalance,
        recentLeaves: leavesResult.data,
        clockedIn,
    };
};

const getAdminDashboard = async() => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    const [empResult, deptResult, payrollResult] = await Promise.all([
        getAllEmployees({ page: 1, limit: 1 }), // we only need meta.total
        getAllDepartments({ page: 1, limit: 1000 }),
        getAllPayroll({ page: 1, limit: 1000 }),
    ]);

    const totalEmployees = empResult.meta ? empResult.meta.total : empResult.data.length;
    const totalDepartments = deptResult.data ? deptResult.data.length : 0;

    const thisMonthPayrolls = (payrollResult.data || []).filter(
        (p) => p.month === currentMonth && p.year === currentYear
    );

    const totalPayroll = thisMonthPayrolls.reduce(
        (sum, p) => sum + parseFloat(p.net_salary || 0), 0
    );
    const avgSalary = thisMonthPayrolls.length > 0 ?
        totalPayroll / thisMonthPayrolls.length :
        0;

    return {
        totalEmployees,
        totalDepartments,
        totalPayroll: parseFloat(totalPayroll.toFixed(2)),
        avgSalary: parseFloat(avgSalary.toFixed(2)),
    };
};

module.exports = {
    getEmployeeDashboard,
    getAdminDashboard,
};