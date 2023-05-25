import React from 'react'
import { popularnews } from './Data';

export default function V1PopularNews() {
    const populars = popularnews.filter(getPopularnews =>
        getPopularnews.type === 'popular'
      );
      const listItems = populars.map(getPopularnews =>
        <div key={getPopularnews.id}  className='grid grid-cols-1 w-48'>
            <img className='w-48 h-56 object-cover rounded-xl' src={getPopularnews.image} />
            <p className='line-clamp-2 font-bold text-zinc-900 mt-2'>{getPopularnews.title}</p>
            <p className='text-zinc-400 text-xs mt-1'>{getPopularnews.authoer} - <span>{getPopularnews.date}</span></p>
        </div>
      );
      return <div className='overflow-x-scroll mobileXscroll w-fit py-2 pl-4 pr-8 flex gap-x-4'>{listItems}</div>;
}
