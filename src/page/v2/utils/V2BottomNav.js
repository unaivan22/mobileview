import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Jobs from './Jobs';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';




export default function V2BottomNav() {
  return (
    <Tab.Group>

        <Tab.Panels>
            <Tab.Panel>
             <Jobs />
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* <Author /> */}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              {/* <Publication /> */}
            </Tab.Panel>
            <Tab.Panel>
              {/* <Publication /> */}
            </Tab.Panel>
        </Tab.Panels>

        <Tab.List className='flex pb-3 bg-white w-safearea justify-between px-2'>
            
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-rose-500 rounded-xl bg-white' : 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-zinc-400 rounded-xl bg-white'
                  }
                >
                    <BiHomeAlt fontSize="1.5em" />
                  Home
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-rose-500 rounded-xl bg-white' : 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-zinc-400 rounded-xl bg-white'
                  }
                >
                    <AiOutlineSearch fontSize="1.5em" />
                  Search
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-rose-500 rounded-xl bg-white' : 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-zinc-400 rounded-xl bg-white'
                  }
                >
                    <BiBookmark fontSize="1.5em" />
                  Saved
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-rose-500 rounded-xl bg-white' : 'text-center flex flex-col items-center text-xs font-normal px-4 py-2 text-zinc-400 rounded-xl bg-white'
                  }
                >
                    <MdOutlineAccountCircle fontSize="1.5em" />
                  Account
                </button>
              )}
            </Tab>
            
        </Tab.List>

          
      </Tab.Group>
  )
}
