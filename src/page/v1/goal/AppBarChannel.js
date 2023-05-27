import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function AppBarChannel() {
const navigate = useNavigate();
  return (
    <div className="navbar h-14 ">
      <div className="navbar-start">
        <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={() => navigate(-1)} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </label>
        <img className='h-8 w-8 object-contain' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Goal-com_Logo.svg/320px-Goal-com_Logo.svg.png'/>
      </div>
      <div className="navbar-center shrink w-full">
        <input type="text" className="block w-full rounded-lg border-0 py-1.5 pl-2 mr-2 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-50 text-xs" placeholder="Search on goal" />
      </div>
      {/* <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </button>
      </div> */}
    </div>
  )
}
