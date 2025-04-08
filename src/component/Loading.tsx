import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Loading() {
  return (
    <div className='screen z-50 absolute inset-0 justify-center items-center bg-[#00000030] flex'>
        <DotLottieReact 
            autoplay
            loop
            src='https://lottie.host/720fa70d-fd5b-4b48-b83f-6092041bbe6f/0zefVnb5kO.lottie'
            style={{height: '200px' }}
        />

    </div>
  )
}
