import React from 'react'
import './Sidbar.css'
import { NavLink } from 'react-router-dom'
import {
  Home,
  Users,
  ClipboardList,
  Package,
  Settings,
  BarChart,
  User,
  Truck,
  DollarSign,
} from "lucide-react";

export default function Sidbar() {
  return (
    <div className="sidbar">
      <div className="logo">
        <h2>IWMS</h2>
        <h5>WorkShop Manager</h5>
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <Home size={18} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Attandance"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <Users size={18} />
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/JobOrder"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <ClipboardList size={18} />
              Job orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Inventory"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <Package size={18} />
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Production"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <Settings size={18} />
              Production
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Sales"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <BarChart size={18} />
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Employees"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <User size={18} />
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Suppliers"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <Truck size={18}/>
              Suppliers
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Accounting"}
              className={({ isActive }) => (isActive ? "t active" : "t")}
            >
              <DollarSign size={18}/>
              Accounting
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="userBox">
        <div className="userInfo">
          <div className="avatar"></div>

          <div className="text">
            <p className="role">Admin User</p>
            <p className="email">admin@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}