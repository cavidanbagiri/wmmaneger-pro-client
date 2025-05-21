


// import { BsBookshelf, CiUser, IoMdShareAlt, PiWarehouseLight, RxDashboard } from "react-icons/all";



import { motion } from "framer-motion";
import { useState } from "react";

import { RxDashboard } from "react-icons/rx";
import { PiWarehouseLight } from "react-icons/pi";
import { BsBookshelf } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { CiUser } from "react-icons/ci";


const iconMap = {
  Dashboard: <RxDashboard />,
  Warehouse: <PiWarehouseLight />,
  Stock: <BsBookshelf />,
  Area: <IoMdShareAlt />,
  Profile: <CiUser />,
};

export default function SidebarItem({ name }: { name: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[name as keyof typeof iconMap];

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="text-3xl p-2 rounded-md text-gray-300 hover:bg-slate-700 transition-colors duration-200"
      >
        {Icon}
      </motion.div>

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 5 : -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-slate-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-10 pointer-events-none"
      >
        {name}
      </motion.span>
    </div>
  );
}



// // import { BsBookshelf, CiUser, IoMdShareAlt, PiWarehouseLight, RxDashboard } from "react-icons/all";


// import { motion } from "framer-motion";
// import { useState } from "react";



// import { RxDashboard } from "react-icons/rx";
// import { PiWarehouseLight } from "react-icons/pi";
// import { BsBookshelf } from "react-icons/bs";
// import { IoMdShareAlt } from "react-icons/io";
// import { CiUser } from "react-icons/ci";

// const iconMap = {
//   Dashboard: <RxDashboard />,
//   Warehouse: <PiWarehouseLight />,
//   Stock: <BsBookshelf />,
//   Area: <IoMdShareAlt />,
//   Profile: <CiUser />,
// };

// export default function SidebarItem({ name }: { name: string }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const Icon = iconMap[name as keyof typeof iconMap];

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative flex items-center group"
//     >
//       <motion.div
//         whileTap={{ scale: 0.95 }}
//         className="text-3xl p-2 rounded-md text-gray-300 hover:bg-slate-700 transition-colors duration-200"
//       >
//         {Icon}
//       </motion.div>

//       {/* Tooltip */}
//       <motion.span
//         initial={{ opacity: 0, x: -10 }}
//         animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 5 : -10 }}
//         transition={{ duration: 0.2 }}
//         className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-slate-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-10"
//       >
//         {name}
//       </motion.span>
//     </div>
//   );
// }
