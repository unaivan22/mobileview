import React from 'react'
import { template } from './Data';
import {Link} from "react-router-dom";

export default function V1HotNews() {
    const hotnews = template.filter(getTemplate =>
        getTemplate.type === 'hotnews'
      );
      const listItems = hotnews.map(getTemplate =>
        <Link to={getTemplate.link} key={getTemplate.id}  className='w-12 h-12 rounded-full bg-zinc-100 flex items-center place-items-center justify-center ring-1 ring-gray-400'>
            <img className='w-8 h-8 object-contain' src={getTemplate.image} />
        </Link>
      );
      return <div className='overflow-x-scroll mobileXscroll w-fit py-2 pl-4 pr-8 flex gap-x-2'>{listItems}</div>;
}
