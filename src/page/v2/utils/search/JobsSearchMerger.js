import React from 'react'
import HeaderSearchJob from './HeaderSearchJob'
import JobSearch from './JobSearch'
import JobSearched from './JobSearched'

export default function JobsSearchMerger() {
  return (
    <div className='relative bg-white h-[600px]'>
      <HeaderSearchJob />
      <JobSearch />
      <JobSearched />
    </div>
  )
}
