import React from 'react';
import './Attendance.css';

const stats = [
  { label: 'Total Employees', count: 6, color: '#eef2ff' },
  { label: 'Present Today', count: 5, color: '#f0fdf4' },
  { label: 'Absent Today', count: 1, color: '#fef2f2' },
  { label: 'Total Hours', count: 44.9, color: '#faf5ff' },
  { label: 'On Leave', count: 3, color: '#eff6ff' },
];

const employees = [
  { id: 'EMP-001', name: 'John Doe', role: 'Technician', in: '08:00', out: '17:00', hours: '9.0h', status: 'Present' },
  { id: 'EMP-002', name: 'Sarah Smith', role: 'Technician', in: '08:15', out: '17:10', hours: '8.9h', status: 'Late' },
  { id: 'EMP-003', name: 'Mike Johnson', role: 'Inventory Manager', in: '08:00', out: '17:00', hours: '9.0h', status: 'Present' },
];

export default function Attendance() {
  return (
    <div className="attendance-container">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card" style={{ backgroundColor: '#fff' }}>
             <div className="stat-icon" style={{ backgroundColor: stat.color }}>👤</div>
             <div className="stat-info">
                <h3>{stat.count}</h3>
                <p>{stat.label}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="table-section">
        <div className="table-header">
          <h3>Today's Attendance - April 24, 2026</h3>
        </div>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td className="user-td"><strong>{emp.name}</strong></td>
                <td>{emp.role}</td>
                <td>{emp.in}</td>
                <td>{emp.out}</td>
                <td>{emp.hours}</td>
                <td>
                  <span className={`status-badge ${emp.status.toLowerCase()}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}