import React from 'react'
import Phone from './Phone'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Phone>
        <div className='grid h-screen place-items-center not-found'>
            <div className='text-center'>
                <div className='mb-8'>
                    <div className='flex items-center gap-x-2'>
                        <img className='h-16' src='/media/utils/cactus.svg' />
                        <h5 className='text-7xl'>404</h5>
                    </div>
                    <h5 className='text-md font-thin text-zinc-600'>Got lost? Nothing here</h5>
                </div>
                <a className='text-rose-500 text-xl font-bold mt-4 pointer' onClick={() => navigate(-1)}>Back</a>
            </div>
            </div>
    </Phone>
  )
}
