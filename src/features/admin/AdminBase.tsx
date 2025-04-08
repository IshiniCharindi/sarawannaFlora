import React, {useEffect, useState} from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loading-slice'
import { AppDispatch } from '../../redux/store'
import ControlPanel from './ControlPanel'
import menuIcon from '../../assets/icons/menu-icon.svg'
import {motion, AnimatePresence} from 'framer-motion'
import { isMobile } from '../../middleware/responsive'



export default function AdminBase() {
  const [panelOpen, setPanelOpen] = useState<boolean>(true)
  const [mobileView, setMobileView] = useState<boolean>(false)
  const dispatch: AppDispatch = useDispatch()


  useEffect(() => {
    setPanelOpen(!isMobile(window))
  }, [])

  return (
    <div className='screen flex-row !justify-start'>
        <AnimatePresence>
        {panelOpen && <ControlPanel/>}
        </AnimatePresence>


        <div className="content flex-1 items-center flex flex-col">
          
            <div className="top-bar w-full h-fit p-4 flex flex-row justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setPanelOpen(pre => !pre)}
                className='border-none cursor-pointer w-[35px] p-0.5 focus:drop-shadow-2xl'
              >
                <img src={menuIcon} alt="" />
              </motion.button>


              <div className="admin-card flex flex-col justify-center items-start w-fit h-fit p-2.5 rounded-2xl bg-[#101A33]">
                <h3 className='font-bold text-[16px] p-0 text-white'>Sachindu Kavishka</h3>
                <h6 className='text-[12px] font-bold text-white'>Welcome back, Captain</h6>
              </div>

            </div>


            <div className="d-content flex flex-1 !flex-grow w-full p-5 flex-col justify-center items-center">
              
            </div>
        </div>
        
    </div>
  )
}
