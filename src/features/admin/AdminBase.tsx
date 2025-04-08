import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loading-slice'
import { AppDispatch } from '../../redux/store'
import ControlPanel from './ControlPanel'

export default function AdminBase() {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className='screen flex-row !justify-start'>
        <ControlPanel/>
        
        <div className="content flex-1 flex-column">
            <div className="top-bar w-full p-4 bg-red-500 flex-row justify-between items-center">
              <div>Hello</div>
              <div>Hello</div>

            </div>
        </div>
    </div>
  )
}
