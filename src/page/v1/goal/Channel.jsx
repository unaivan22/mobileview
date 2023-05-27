import React from 'react'
import Phone from '../../../utils/phone/Phone'
import AppBarChannel from './AppBarChannel'
import AnimatedPage from '../../../utils/AnimatedPage'
import ChanelTab from './ChanelTab'


export default function Channel() {
  return (
    <Phone>
        <AnimatedPage>
            <div className=''>
                <AppBarChannel />
                <div className='grid grid-cols-1 mx-4 place-items-center justify-center bg-white absolute'>
                    <ChanelTab />
                </div>
            </div>
        </AnimatedPage>
    </Phone>
  )
}
