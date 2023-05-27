import React from 'react'
import { publicationnews } from '../utils/Data';
import {Link} from "react-router-dom";

export default function Publication() {
    const publications = publicationnews.filter(getPublicationnews =>
        getPublicationnews.type === 'publication'
      );
      const listItems = publications.map(getPublicationnews =>
        <Link to={getPublicationnews.link}  key={getPublicationnews.id}  className='flex flex-row justify-between mb-6 mx-6 items-center'>
            <div>
              <p className='line-clamp-2 font-normal text-sm text-zinc-900'>{getPublicationnews.topic} <span><div class="badge text-xs text-zinc-700 bg-zinc-200 border-0">{getPublicationnews.total}</div></span></p>
            </div>
            <div >
              <button class="font-base text-xs text-zinc-700 bg-zinc-200 hover:bg-zinc-800 hover:text-zinc-200 py-2 px-4 rounded-full w-fit">
                Follow
              </button>
            </div>
        </Link>
      );
      return <div className='h-[712px] overflow-y-scroll overflow-x-hidden w-safearea'>{listItems}</div>;
}
