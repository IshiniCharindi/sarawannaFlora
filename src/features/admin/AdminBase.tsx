import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loading-slice'
import { AppDispatch } from '../../redux/store'

export default function AdminBase() {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className='screen'>
        
        
    </div>
  )
}
