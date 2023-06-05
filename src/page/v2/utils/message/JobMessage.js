import React from 'react'
import { messageJson } from '../Data';
import {Link} from "react-router-dom";
import { BsBookmarkCheckFill } from 'react-icons/bs';

export default function JobMessage() {
    const messageJ = messageJson.filter(getRecentMessage =>
        getRecentMessage.filter === 'message'
      );
      const listItems = messageJ.map(getRecentMessage =>
        <Link to={getRecentMessage.link}  key={getRecentMessage.id}  className='grid grid-cols-1 border-b border-zinc-100 mb-2 pb-2'>
            <div className='mx-4 grid grid-cols-5'>
                <div className='col-span-1'>
                    <img className='h-12 aspect-square object-cover rounded-full col-span-1 my-1' src={getRecentMessage.image} />
                </div>
                <div className='col-span-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='text-md text-zinc-900'>{getRecentMessage.Name}</h1>
                        <p className='text-xs text-zinc-500'>{getRecentMessage.date}</p>
                    </div>
                    <p className='text-xs text-zinc-500 line-clamp-2'>{getRecentMessage.summary}</p>
                </div>
            </div>
            
        </Link>
      );
      return <div className='h-[470px] overflow-y-scroll overflow-x-hidden'>{listItems}</div>;
}
