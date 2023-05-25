import React from 'react'
import { recentnews } from './Data';
import {Link} from "react-router-dom";

export default function V1RecentNews() {
    const recents = recentnews.filter(getRecentnews =>
        getRecentnews.type === 'recent'
      );
      const listItems = recents.map(getRecentnews =>
        <Link to={getRecentnews.link}  key={getRecentnews.id}  className='grid grid-cols-3 gap-x-4 mb-6'>
            <img className='aspect-square object-cover rounded-xl col-span-1' src={getRecentnews.image} />
            <div className='col-span-2'>
              <p className='line-clamp-2 font-bold text-zinc-900'>{getRecentnews.title}</p>
              <p className='text-zinc-400 text-xs mt-1'>{getRecentnews.authoer} - <span>{getRecentnews.date}</span></p>
            </div>
            
        </Link>
      );
      return <div className=''>{listItems}</div>;
}
