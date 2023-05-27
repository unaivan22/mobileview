import React from 'react'
import { authornews } from '../utils/Data';
import {Link} from "react-router-dom";

export default function Author() {
    const author = authornews.filter(getAuthornews =>
        getAuthornews.type === 'author'
      );
      const listItems = author.map(getAuthornews =>
        <Link to={getAuthornews.link}  key={getAuthornews.id}  className='grid grid-cols-5 gap-x mb-8 items-center'>
            <img className='aspect-square h-12 w-12 object-cover rounded-full col-span-1' src={getAuthornews.image} />
            <div className='col-span-4'>
                <h3 className='font-bold text-zinc-800 text-sm mb-2'>{getAuthornews.name}</h3>
                <p className='line-clamp-2 text-zinc-400 text-xs'>{getAuthornews.describe}</p>
            </div>
            
        </Link>
      );
      return <div className='h-[712px] overflow-y-scroll overflow-x-hidden w-safe-area'>{listItems}</div>;
}
