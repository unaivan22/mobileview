import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AppBarDetail() {
  const navigate = useNavigate();
  return (
    <div className="navbar h-14 ">
      <div className="navbar-start">
        <div>
          <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={() => navigate(-1)} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <h3 className="normal-case text-md font-semibold text-zinc-700">Sport</h3>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
          </svg>
        </button>
      </div>
    </div>
  )
}
