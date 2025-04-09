import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import companyLogo from '../../assets/logo/company-logo.png'
import {MdOutlineAddChart, MdManageHistory, MdOutlineSettings  } from 'react-icons/md'
import {AiTwotoneContainer } from 'react-icons/ai'
import {CgLogOut } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { selfCloser } from '../../middleware/responsive'

export default function ControlPanel(props: any) {
  const mobileView = useSelector((state: RootState) => state.mobileSlice)

  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (mobileView) {
      window.addEventListener('mousedown', (e) => selfCloser(e, panelRef, () => {
        props.setPanelOpen(false)
      }))
      return(() => {
        window.removeEventListener('mousedown', (e) => selfCloser(e, panelRef, () => {
          props.setPanelOpen(false)
        }))
      })
    }
  }, []) 

  return (
    <motion.div 
    ref={panelRef}
    initial={{x: -300}}
    animate={{x: 0}}
    exit={{x: -300}}
    transition={{stiffness: 20, mass: 0.5, duration: 0.2}}
    className={`h-screen w-[300px] z-20 bg-[#101A33] drop-shadow-lg flex flex-col justify-between items-center ${mobileView ? 'fixed max-w-[80%]': ''}`}>
        <div className='flex-column justify-center items-center'>
        <h1 className="heading text-white pt-4 font-bold text-3xl ">Saravana Floral</h1>
        <h3 className='text-white font-bold text-center'>CONTROL PANEL</h3>
        </div>


        <div className="content flex flex-col w-full flex-grow justify-center items-center p-5">
            <div className="inner-content m-5 flex flex-col justify-center items-start w-full">
                <button className='text-white font-bold m-2.5 flex flex-row items-center cursor-pointer'><MdOutlineAddChart style={{margin: '4px'}}/> New Product</button>
                <button className='text-white font-bold m-2.5 flex flex-row items-center cursor-pointer'><MdManageHistory style={{margin: '4px'}}/> Manage Products</button>
                <button className='text-white font-bold m-2.5 flex flex-row items-center cursor-pointer'><AiTwotoneContainer  style={{margin: '4px'}}/> Orders</button>
                <button className='text-white font-bold m-2.5 flex flex-row items-center cursor-pointer'><MdOutlineSettings  style={{margin: '4px'}}/> Settings</button>
                <button className='text-red-500 font-bold m-2.5 flex flex-row items-center cursor-pointer'><CgLogOut  style={{margin: '4px'}}/> Logout</button>
             
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
