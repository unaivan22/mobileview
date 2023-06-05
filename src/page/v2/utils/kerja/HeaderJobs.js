import React from 'react'

export default function HeaderJobs() {
  return (
    <div className="navbar bg-white h-10 min-h-10 max-h-10 px-4">
      <div className="flex-1">
        <h1 className=" normal-case text-lg text-zinc-800 font-bold">Jobs</h1>
      </div>
      <div className="flex-none">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src="https://cdn.dribbble.com/users/2709992/avatars/normal/05c91f30e811ac4779f7965831a52047.jpeg?1675666824" />
            </div>
          </label>
      </div>
    </div>
  )
}
