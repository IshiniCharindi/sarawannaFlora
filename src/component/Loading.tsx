import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Loading() {
  return (
    <div className='screen z-20 absolute inset-0 justify-center items-center bg-amber-400'>
        <h2>From Loader</h2>
        <DotLottieReact 
            autoplay
            loop
            src='assets/loading-animation.json'
            style={{ width: '100%', height: '100%' }}
        />

    </div>
  )
}
