import React from 'react'
import {motion} from 'framer-motion'
import companyLogo from '../../assets/logo/company-logo.png'

export default function ControlPanel() {
  return (
    <motion.div 
    initial={{x: -300}}
    animate={{x: 0}}
    exit={{x: -300}}
    transition={{duration: 0.2}}
    className='h-screen w-[300px] bg-[#101A33] drop-shadow-lg flex flex-col justify-between items-center'>
        <div className='flex-column justify-center items-center'>
        <h1 className="heading text-white pt-4 font-bold text-3xl ">Sarvanna Floral</h1>
        <h3 className='text-white font-bold text-center'>CONTROL PANEL</h3>
        </div>


        <div className="content flex flex-col w-full flex-grow justify-center items-center">
            <div className="inner-content m-5 flex flex-col justify-center items-center w-full">
                <button className='text-white font-bold m-2.5'>New Product</button>
                <button className='text-white font-bold m-2.5'>Manage Products</button>
                <button className='text-white font-bold m-2.5'>Orders</button>
                <button className='text-white font-bold m-2.5'>Settings</button>
                <button className='text-white font-bold m-2.5'>Logout</button>
            </div>
        </div>

        <div className="company flex w-full flex-col aspect-square justify-center items-center p-5 rounded-lg border-white">
            {/* <h2 className='text-xl text-white font-bold text-center'>We embroid your dreams</h2> */}
            <img src={companyLogo} alt="Soft detroits logo" className='w-[80%]'/>
            <h4 className='text-white'>Hotline: +94 76 431 4505</h4>
        </div>
    </motion.div>
  )
}
