import React from 'react'
import Phone from '../../utils/phone/Phone'
import V1HotNews from './utils/V1HotNews'
import V1PopularNews from './utils/V1PopularNews'
import V1RecentNews from './utils/V1RecentNews'
import AnimatedPage from '../../utils/AnimatedPage'
import V1NewsClub from './utils/V1NewsClub'

export default function Mobileviewone() {
  return (
    <div>
      <Phone>
        <AnimatedPage>
          <div className='baseHome relative bg-white h-[712px] overflow-y-scroll overflow-x-hidden w-safearea mb-80'>
            <div className='xs:container'>
              <section className='bg-white sticky top-0 w-full pt-4 pb-2'>
                <div className="relative rounded-md shadow-sm mx-4">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  </div>
                  <input type="text" name="price" id="price" className="block w-full rounded-lg border-0 py-1.5 pl-8 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-50 text-xs" placeholder="Search" />
                </div>
              </section>

              <section className='mt-4'>
                {/* <h1 className='font-bold text-lg mx-4 text-zinc-800'>Channel</h1> */}
                <div className='w-safearea overflow-x-scroll mobileXscroll scrollerX'>
                  <V1HotNews />
                </div>
              </section>

              <section className='mt-6'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-bold text-lg mx-4 text-zinc-800'>Popular</h1>
                  <h1 className='font-bold text-xs mx-4 text-rose-500'>See all</h1>
                </div>
                <div className='w-safearea overflow-x-scroll mobileXscroll scrollerX'>
                  <V1PopularNews />
                </div>
              </section>

              <section className='mt-4'>
                <h1 className='font-bold text-lg mx-4 text-zinc-800'>Clubs</h1>
                <div className='w-safearea overflow-x-scroll mobileXscroll scrollerX'>
                  <V1NewsClub />
                </div>
              </section>

              <section className='mt-6 mx-4 text-zinc-800'>
                <h1 className='font-bold text-lg'>Recent</h1>
                <div className='mt-4'>
                  <V1RecentNews />
                </div>
              </section>

              {/* <div className="relative rounded-xl overflow-auto p-8"><div className="flex items-center justify-center">
                <div type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Load more content
                </div>
              </div></div> */}
              
            </div>
          </div>
        </AnimatedPage>
      </Phone>
    </div>
  )
}
