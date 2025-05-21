import React from 'react'

import warehouse_module_logo from '../../assets/warehouse_module_logo.png'

function ModuleCard() {
    return (
        <div style={{ fontFamily: 'Open Sans' }} className='flex flex-row mt-10 '>

            <div className='flex flex-col w-1/2'>

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col mr-5 items-center p-2 justify-evenly h-64 w-80 bg-orange-100 text-orange-400 shadow-lg rounded-2xl'>
                        <span className='text-5xl font-bold'>Warehouse</span>
                        <img className='h-32'
                            src={warehouse_module_logo} />
                        <span className='text-sm text-orange-400 w-full text-right'>
                            Total Rows: 341
                        </span>
                    </div>

                    <div className='flex flex-col mr-5 items-center p-2 justify-evenly h-64 w-80 border border-gray-100 shadow-lg rounded-2xl'>
                        <span className='text-5xl font-bold'>Stock</span>
                        <img className='h-32'
                            src="https://img.freepik.com/premium-vector/warehouse-icon-isometric-warehouse-vector-icon-web-design-isolated-white-background_98396-7577.jpg" alt="" />
                        <span className='text-sm text-gray-500  w-full text-right'>
                            Total Rows: 341
                        </span>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center mt-5'>
                    <div className='flex flex-col mr-5 items-center p-2 justify-evenly h-64 w-80 border border-gray-100 shadow-lg rounded-2xl'>
                        <span className='text-5xl font-bold'>Area</span>
                        <img className='h-32'
                            src="https://img.freepik.com/premium-vector/warehouse-icon-isometric-warehouse-vector-icon-web-design-isolated-white-background_98396-7577.jpg" alt="" />
                        <span className='text-sm text-gray-500  w-full text-right'>
                            Total Rows: 341
                        </span>
                    </div>

                    <div className='flex flex-col mr-5 items-center p-2 justify-evenly h-64 w-80 border border-gray-100 shadow-lg rounded-2xl'>
                        <span className='text-5xl font-bold'>Profile</span>
                        <img className='h-32'
                            src="https://img.freepik.com/premium-vector/warehouse-icon-isometric-warehouse-vector-icon-web-design-isolated-white-background_98396-7577.jpg" alt="" />
                        <span className='text-sm text-gray-500  w-full text-right'>
                            Total Rows: 341
                        </span>
                    </div>
                </div>

            </div>
            <div className='bg-red-400'>
                
            </div>

        </div>
    )
}

export default ModuleCard