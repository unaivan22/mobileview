import React from 'react'
import { jobJson } from '../Data';
import {Link} from "react-router-dom";
import { BsBookmark } from 'react-icons/bs';

export default function JobSearched() {
    const jobJ = jobJson.filter(getRecentJob =>
        getRecentJob.filter === 'job'
      );
      const listItems = jobJ.map(getRecentJob =>
        <Link to={getRecentJob.link}  key={getRecentJob.id}  className='grid grid-cols-1 border-b border-zinc-100 mb-2 pb-2'>
            <div className='mx-4'>
                <div className='flex items-center gap-x-2'>
                    <img className='h-4 aspect-square object-cover rounded-xl col-span-1 my-1' src={getRecentJob.image} />
                    <p className='text-xs'>{getRecentJob.company}</p>
                </div>
                <p className='line-clamp-2 font-medium  text-sm text-zinc-900 mb-2'>{getRecentJob.title}</p>
                <div className='flex flex-row justify-between'>
                    <div className='flex'>
                        <p className='text-zinc-400 text-xs mt-1 mr-1 capitalize'>{getRecentJob.type} - </p>
                        <p className='text-zinc-400 text-xs mt-1 mr-1'>{getRecentJob.work} - </p>
                        <p className='text-zinc-400 text-xs mt-1'>{getRecentJob.date}</p>
                    </div>
                    <div className='text-right mr-4'>
                        <BsBookmark color="grey" />
                    </div>
                </div>
            </div>
            
        </Link>
      );
      return <div className='h-[440px] overflow-y-scroll overflow-x-hidden'>{listItems}</div>;
}
