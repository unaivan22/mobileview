import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import V1RecentNews from '../../v1/utils/V1RecentNews'
import Author from './Author'
import Publication from './Publication'

export default function ChanelTab() {
  return (
    <Tab.Group>
          <Tab.List className='flex gap-x-4 mb-5'>
            
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-xs font-bold px-4 py-2 text-gray-900 rounded-xl text-white bg-zinc-900' : 'text-xs font-base px-4 py-2 text-gray-500'
                  }
                >
                  News
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-xs font-bold px-4 py-2 text-gray-900 rounded-xl text-white bg-zinc-900' : 'text-xs font-base px-4 py-2 text-gray-500'
                  }
                >
                  Author
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-xs font-bold px-4 py-2 text-gray-900 rounded-xl text-white bg-zinc-900' : 'text-xs font-base px-4 py-2 text-gray-500'
                  }
                >
                  Publication
                </button>
              )}
            </Tab>
            
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
             <V1RecentNews />
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <Author />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <Publication />
            </Tab.Panel>
          </Tab.Panels>
      </Tab.Group>
  )
}
