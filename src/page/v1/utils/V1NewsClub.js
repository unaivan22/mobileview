import React from 'react'
import { hotteam } from './Data';
import {Link} from "react-router-dom";

export default function V1NewsClub() {
    const hotteams = hotteam.filter(getHotteams =>
        getHotteams.type === 'hotteam'
      );
      const listItems = hotteams.map(getHotteams =>
        <Link to={getHotteams.link} key={getHotteams.id}  className='w-12 h-12 rounded-full bg-zinc-100 flex items-center place-items-center justify-center ring-1 ring-gray-300'>
            <img className='w-8 h-8 object-contain' src={getHotteams.image} />
        </Link>
      );
      return <div className='overflow-x-scroll mobileXscroll w-fit py-2 pl-4 pr-8 flex gap-x-2'>{listItems}</div>;
}
