import React from 'react'
import Phone from '../../utils/phone/Phone'
import AnimatedPage from '../../utils/AnimatedPage'
import V2BottomNav from './utils/V2BottomNav'

export default function Mobileviewtwo() {
  return (
    <div>
      <Phone>
        <AnimatedPage>
          <div className='font-inter baseHome relative bg-white h-[712px] overflow-y-scroll overflow-x-hidden w-safearea mb-80'>
            

            <div className='absolute z-50 bottom-12  place-items-center justify-center bg-white'>
              <V2BottomNav />
            </div>
          </div>
        </AnimatedPage>
      </Phone>
    </div>
  )
}
