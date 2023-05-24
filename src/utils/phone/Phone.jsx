import React from 'react'
import AppBar from './AppBar'

export default function Phone() {
  return (
    <div className="grid min-h-screen bg-purple-50 place-items-center">
        <div className="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl">
            <img className="absolute inset-0 h-full w-full object-cover" src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg" />
            <AppBar />
            <div className="absolute top-0 inset-x-0">
                <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
            </div>
        </div>
    </div>
  )
}
