import React, {useState} from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loading-slice'
import { AppDispatch } from '../../redux/store'
import ControlPanel from './ControlPanel'
import menuIcon from '../../assets/icons/menu-icon.svg'
import {motion} from 'framer-motion'



export default function AdminBase() {
  const [panelOpen, setPanelOpen] = useState<boolean>(true)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className='screen flex-row !justify-start'>
        {panelOpen && <ControlPanel/>}
        
        <div className="content flex-1 flex-column">
            <div className="top-bar w-full p-4 flex-row justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setPanelOpen(pre => !pre)}
                className='border-none cursor-pointer w-[35px] p-0.5 focus:drop-shadow-2xl'
              >
                <img src={menuIcon} alt="" />
              </motion.button>

            </div>
        </div>
    </div>
  )
}
