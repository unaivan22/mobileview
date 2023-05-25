import React from 'react'
import AppBar from '../utils/phone/AppBar'

export default function Home() {
  return (
    <div className="grid min-h-screen bg-purple-50 place-items-center">
        <div className="mx-auto h-[712px] w-[350px] bg-white rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-slate-300 shadow-xl">
            <img className="absolute inset-0 h-full w-full object-cover" src='https://cdn.neowin.com/news/images/galleries/4685/1654590747_macos_ventura_wallpaper_light.jpg' />
            <AppBar />
            {/* <div className={className}>{children}</div> */}
            <div className="absolute top-0 inset-x-0">
                <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
            </div>
            
        </div>
    </div>
  )
}
