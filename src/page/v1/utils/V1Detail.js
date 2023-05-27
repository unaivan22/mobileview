import React from 'react'
import Phone from '../../../utils/phone/Phone'
import AppBarDetail from '../../../utils/phone/AppBarDetail'
import AnimatedPage from '../../../utils/AnimatedPage'

export default function V1Detail() {
  return (
    <Phone>

        <AnimatedPage>
            <AppBarDetail />
            <div className='mx-4 grid grid-cols-1 overflow-y-scroll h-[712px]'>
                <h1 className='text-zinc-900 font-bold text-xl leading-snug mb-8'>Richarlison, Antony, Brenden Aaronson & the 21 most disappointing Premier League signings of the 2022-23 season - ranked</h1>
                <img className='rounded-xl mb-8' src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc535ac4b92498d18/646ca306291f1fe7a0dcf18f/EPL_Most_Disappointing_Signing.jpg?auto=webp&format=pjpg&width=640&quality=60'/>

                <section className='space-y-4'>
                    <p className='text-xs text-zinc-500 font-light'>GOAL ranks the most underwhelming Premier League transfers of the campaign after record-breaking spending by English clubs</p>
                    <p className='text-xs text-zinc-500 font-light'>When it comes to transfers, it was a truly remarkable year in the Premier League, as spending across the division reached never-before-seen levels. It wasn't just the usual suspects who splashed the cash, either, with the likes of Newcastle, West Ham and Wolves going big, too.</p>
                    <p className='text-xs text-zinc-500 font-light'>Indeed, Premier League clubs obliterated the previous record for expenditure across two outrageous transfer windows; £2.1 billion ($2.6bn) was splurged in the summer alone, with that figure rising to £2.8bn ($3.5bn) in January as Chelsea in particular went on a shopping spree.</p>
                    <p className='text-xs text-zinc-500 font-light'>But with such a phenomenal amount of money spent, there has inevitably been some big misses among the hoard of incoming transfers. Below, GOAL ranks the 21 most disappointing Premier League transfers of 2022-23...</p>
                    <p className='text-xs text-zinc-500 font-light'>aaa</p>
                    <p className='text-xs text-zinc-500 font-light'>aaa</p>
                    <p className='text-xs text-zinc-500 font-light'>aaa</p>
                </section>
            </div>
        </AnimatedPage>
        
    </Phone>
  )
}
