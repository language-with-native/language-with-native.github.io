"use client"
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

const Subscribe: NextPage = () => {
    return (
        <main className="bg-gray-100 min-h-fit bg-color-yellow">
            <div className="max-w-5xl mx-auto py-16 ">
               
            <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Start your journey by requesting a lesson</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>"Unlock your potential and take charge of your future! 
                        This lesson is your chance to gain valuable skills and insights that can make a real difference. 
                        Don’t wait—click ‘Enroll to a course’ now and start your journey to success!"</h3>
                   
                        <div className="flex items-center justify-center">
                            <button type="submit" className="flex items-center justify-center text-lg w-64 rounded-md shadow py-3 px-4 text-blue bg-indigo-600 bg-color-blue" 
                            onClick={()=>redirect('/subscribe')}
                            >Enroll to a course</button>
                        </div>
          
                </div>
        </main>
    )
}

export default Subscribe