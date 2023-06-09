import Phone from '../../../../utils/phone/Phone'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from './data.json'; // Assuming your JSON data is in a file named 'data.json'
import { BsBookmark } from 'react-icons/bs';

const FullSearch = () => {
    const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter the data based on the search term
    const results = jsonData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <Phone>
        <div className="navbar bg-white h-10 min-h-10 max-h-10 px-4">
        <div className="flex-1">
                <label tabIndex={0} className="p-2 pointer rounded-full hover:bg-slate-50" onClick={() => navigate(-1)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </label>
            <h1 className=" normal-case text-lg text-zinc-800 font-bold">Searching Jobs</h1>
        </div>
        </div>
        <section className='mb-4'>
            <div className="relative rounded-md shadow-sm mx-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                <input type="text" placeholder="Searching job title" value={searchTerm} onChange={handleSearch} className="block w-full rounded-lg border-0 py-1.5 pl-8 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 bg-gray-50 text-xs" />
            </div>
        </section>

      {searchResults.length > 0 ? (
        <div className='h-[540px] overflow-y-scroll overflow-x-hidden'>
            {searchResults.map((item) => (
            <a to={item.a}  key={item.id}  className='grid grid-cols-1 border-b border-zinc-100 mb-2 pb-2'>
                <div className='mx-4'>
                    <div className='flex items-center gap-x-2'>
                        <img className='h-4 aspect-square object-cover rounded-xl col-span-1 my-1' src={item.image} />
                        <p className='text-xs'>{item.company}</p>
                    </div>
                    <p className='line-clamp-2 font-medium  text-sm text-zinc-900 mb-2'>{item.title}</p>
                    <div className='flex flex-row justify-between'>
                        <div className='flex'>
                            <p className='text-zinc-400 text-xs mt-1 mr-1 capitalize'>{item.type} - </p>
                            <p className='text-zinc-400 text-xs mt-1 mr-1'>{item.work} - </p>
                            <p className='text-zinc-400 text-xs mt-1'>{item.date}</p>
                        </div>
                        <div className='text-right mr-4'>
                            <BsBookmark color="grey" />
                        </div>
                    </div>
                </div>
            </a>
            ))}
        </div>
      ) : (
        <div className='h-[440px] flex items-center justify-center'>
            <div className='flex flex-col space-y-2 items-center justify-center'>
                <img src='/media/emptystate/jobs_emptystate.svg' />
                <p className='text-sm font-base text-zinc-700'>No results found.</p>
            </div>
        </div>
      )}
    </Phone>
  );
};

export default FullSearch;
