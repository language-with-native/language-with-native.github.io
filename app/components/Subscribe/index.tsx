"use client"
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

const Subscribe: NextPage = () => {
    return (
        <main className="bg-gray-100 min-h-fit bg-color-yellow">
            <div className="max-w-7xl mx-auto py-16 ">
               
            <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Start Your Journey: Request a Lesson Today</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0 m-3'>
                                Unlock Your Potential and Take Charge of Your Future!
                                
    </h3>

    <h3 className='m-3'>
       This lesson is your chance to gain valuable skills and insights that can make a real difference. 
    </h3>
    <h3 className='m-3'>
      As global interconnectedness grows, proficiency in Slavic languages offers a competitive edge in fields like international business, diplomacy, technology, and cultural exchange. Russian, a widely spoken language across Eurasia, serves as a gateway to influential markets and strategic partnerships.
    </h3>
    <h3 className='m-3'>
          Don’t wait—click ‘Enroll to a lesson now and start your journey to success!
    </h3>
                   
                        <div className="flex items-center justify-center mt-3">
                            <button type="submit" className="flex items-center justify-center text-lg w-64 rounded-md shadow py-3 px-4 text-blue bg-indigo-600 bg-color-blue" 
                            onClick={()=>redirect('/subscribe')}
                            >Enroll to a lesson</button>
                        </div>
          
                </div>
        </main>
    )
}

export default Subscribe