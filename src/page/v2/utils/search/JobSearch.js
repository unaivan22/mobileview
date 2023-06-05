import React from 'react'

export default function JobSearch() {
  return (
    <div >
        <section className='mb-4'>
            <div className="relative rounded-md shadow-sm mx-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                <input type="text" name="price" id="price" className="block w-full rounded-lg border-0 py-1.5 pl-8 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 bg-gray-50 text-xs" placeholder="Search" />
            </div>
        </section>
        <div className='border-b border-zinc-100'></div>
        <div className='mx-4 my-3'>
            <p className='text-sm text-zinc-400'>History job you searched</p>
        </div>
    </div>
  )
}
