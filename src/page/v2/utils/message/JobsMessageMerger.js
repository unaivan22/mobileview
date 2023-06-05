import React from 'react'
import JobMessage from './JobMessage'
import JobMessageSearch from './JobMessageSearch'
import HeaderMessageJob from './HeaderMessageJob'

export default function JobsMessageMerger() {
  return (
    <div className='relative bg-white h-[600px]'>
      <HeaderMessageJob />
      <JobMessageSearch />
      <JobMessage />
    </div>
  )
}
