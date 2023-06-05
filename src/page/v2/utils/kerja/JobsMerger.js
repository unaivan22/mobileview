import React from 'react'
import HeaderJobs from './HeaderJobs'
import Jobs from './Jobs'

export default function JobsMerger() {
  return (
    <div className='relative bg-white h-[600px]'>
      <HeaderJobs />
      <Jobs />
    </div>
  )
}
