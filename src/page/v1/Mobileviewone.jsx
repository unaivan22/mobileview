import React from 'react'
import Phone from '../../utils/phone/Phone'
import V1HotNews from './utils/V1HotNews'
import V1PopularNews from './utils/V1PopularNews'
import V1RecentNews from './utils/V1RecentNews'
import AnimatedPage from '../../utils/AnimatedPage'

export default function Mobileviewone() {
  return (
    <div>
      <Phone>
        <AnimatedPage>
          <div className='baseHome relative bg-white h-[712px] overflow-y-scroll overflow-x-hidden w-safearea'>
            <div className='xs:container'>
              <div className="relative mt-2 rounded-md shadow-sm mx-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                <input type="text" name="price" id="price" className="block w-full rounded-lg border-0 py-1.5 pl-8 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 text-xs" placeholder="Search" />
              </div>

              <section className='mt-6'>
                <h1 className='font-bold text-lg mx-4 text-zinc-800'>Channel</h1>
                <div className='w-safearea overflow-x-scroll mobileXscroll scrollerX'>
                  <V1HotNews />
                </div>
              </section>

              <section className='mt-6'>
                <h1 className='font-bold text-lg mx-4 text-zinc-800'>Popular</h1>
                <div className='w-safearea overflow-x-scroll mobileXscroll scrollerX'>
                  <V1PopularNews />
                </div>
              </section>

              <section className='mt-6 mx-4 text-zinc-800'>
                <h1 className='font-bold text-lg'>Recent</h1>
                <div className='mt-4'>
                  <V1RecentNews />
                </div>
              </section>
              
            </div>
          </div>
        </AnimatedPage>
      </Phone>
    </div>
  )
}
