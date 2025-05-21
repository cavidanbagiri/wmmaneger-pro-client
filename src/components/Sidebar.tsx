

import SidebarItem from "./SidebarItem";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="sticky top-0 h-screen w-16 bg-slate-900 text-white flex flex-col justify-between items-center py-4"
    >
      <div className="space-y-6">
        <img src={logo} alt="Logo" className="w-10 mx-auto rounded-md" />

        <nav className="flex flex-col gap-6">
          <NavLink to = '/'>
             <SidebarItem name="Dashboard" />
          </NavLink>
          <NavLink to = '/warehouse'>
             <SidebarItem name="Warehouse" />
          </NavLink>
          <NavLink to = '/stock'>
             <SidebarItem name="Stock" />
          </NavLink>
          <NavLink to = '/area'>
             <SidebarItem name="Area" />
          </NavLink>
          <NavLink to = '/profile'>
             <SidebarItem name="Profile" />
          </NavLink>
        </nav>
      </div>
    </motion.aside>
  );
}
