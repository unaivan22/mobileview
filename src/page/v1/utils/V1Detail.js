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

                <section className='space-y-2 mb-8'>
                    <p className='text-sm text-zinc-500 font-light'>GOAL ranks the most underwhelming Premier League transfers of the campaign after record-breaking spending by English clubs</p>
                    <p className='text-sm text-zinc-500 font-light'>When it comes to transfers, it was a truly remarkable year in the Premier League, as spending across the division reached never-before-seen levels. It wasn't just the usual suspects who splashed the cash, either, with the likes of Newcastle, West Ham and Wolves going big, too.</p>
                    <p className='text-sm text-zinc-500 font-light'>Indeed, Premier League clubs obliterated the previous record for expenditure across two outrageous transfer windows; £2.1 billion ($2.6bn) was splurged in the summer alone, with that figure rising to £2.8bn ($3.5bn) in January as Chelsea in particular went on a shopping spree.</p>
                    <p className='text-sm text-zinc-500 font-light'>But with such a phenomenal amount of money spent, there has inevitably been some big misses among the hoard of incoming transfers. Below, GOAL ranks the 21 most disappointing Premier League transfers of 2022-23...</p>
                </section>

                <section className='space-y-2 mb-8'>
                    <img className='rounded-xl' src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt412e9726709a3457/6372376a61da9210b83d109b/Lingard2.jpg?auto=webp&format=pjpg&width=1080&quality=60' />
                    <p className='text-sm font-bold text-zinc-900 text-xl'>5. Jesse Lingard (Nottingham Forest, free)</p>
                    <p className='text-sm text-zinc-500 font-light'>Among the raft of new signings at Forest last summer, Lingard's name leapt out as the newly-promoted side demonstrated their ambition and desire to stay in the top flight by snaring the sought-after free agent after he departed Manchester United.</p>
                    <p className='text-sm text-zinc-500 font-light'>Despite signing a relegation-proof one-year contract worth £120,000 per week, Lingard barely featured after a hamstring injury at the start of 2023, having rarely shown his best form and seemingly lost the trust of his manager Steve Cooper.</p>
                    <p className='text-sm text-zinc-500 font-light'>With his unusually short contract now over, Lingard is set to find himself in the transfer wilderness again this summer.</p>
                </section>

                <section className='space-y-2 mb-8'>
                    <img className='rounded-xl' src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta1255bde7fde9394/642882161f1e71405af402f0/GettyImages-1478795049.jpg?auto=webp&format=pjpg&width=1080&quality=60' />
                    <p className='text-sm font-bold text-zinc-900 text-xl'>4. Mykhailo Mudryk (Chelsea, £88.5m)</p>
                    <p className='text-sm text-zinc-500 font-light'>Mudryk was supposed to be a game-changing arrival for Chelsea as they pipped Arsenal to his signature in January after his explosive Champions League performances for Shakhtar Donetsk saw his stock rise exponentially over the summer. However, he has found the going tough since arriving in England, struggling to justify his £88.5m ($110m) price tag.</p>
                    <p className='text-sm text-zinc-500 font-light'>To give him the benefit of the doubt, the winger hadn't played since November when he arrived at Stamford Bridge, and the step up from the Ukrainian league to the Premier League was always likely to be tough. Nevertheless, it's been underwhelming.</p>
                </section>


            </div>
        </AnimatedPage>
        
    </Phone>
  )
}
