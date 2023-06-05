import React from 'react'
import HeaderSearchJob from './HeaderSavedJob'
import JobSaved from './JobSaved'

export default function JobsSavedMerger() {
  return (
    <div className='relative bg-white h-[600px]'>
      <HeaderSearchJob />
      <JobSaved />
    </div>
  )
}
