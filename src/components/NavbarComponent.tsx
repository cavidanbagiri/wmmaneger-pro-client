
import { Outlet } from 'react-router-dom'
import { NavLink } from "react-router";

import { RxDashboard } from "react-icons/rx";
import { PiWarehouseLight } from "react-icons/pi";
import { BsBookshelf } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";


import WLogo from "../assets/Wlogo.jpeg"

const AppLayout = () => {



    return (
        <div className='relative w-screen'>

            <div className='sticky top-0 left-0 z-20 text-white float-left h-screen flex flex-col justify-between items-center p-2 bg-slate-800'>

                <div>
                    <div className='my-2'>
                        <img src={WLogo} alt="Logo" className='w-10 rounded-md' />
                    </div>

                    <NavLink to="/" className='relative '>
                        <RxDashboard className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150 my-6' />
                        {/* <span className='absolute top-1 bg-slate-900 p-2 left-9'>Dashboard</span> */}
                    </NavLink>

                    <NavLink to="/warehouse" >
                        <PiWarehouseLight className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150 my-6' />
                    </NavLink>

                    <NavLink to="/" >
                        <BsBookshelf className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150 my-6' />
                    </NavLink>

                    <NavLink to="/" >
                        <IoMdShareAlt className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150 my-6' />
                    </NavLink>

                    <NavLink to="/login" >
                        <CiUser className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150 my-6' />
                    </NavLink>

                </div>

                <div className='mb-3'>
                    <NavLink to="/" >
                        <SlLogout className='text-4xl p-1 hover:bg-slate-400 hover:rounded-md duration-150' />
                    </NavLink>
                </div>

            </div>

            <Outlet />
        </div>
    )
}

export default AppLayout

