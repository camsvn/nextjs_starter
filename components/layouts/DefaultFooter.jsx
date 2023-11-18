import React from 'react'
import ContentWrapper from './ContentWrapper'

const DefaultFooter = () => {
    return (
        <footer className='w-full bg-red-3000 px-5 py-3 shadow-[0_2px_10px_0px_rgba(0,0,0,0.4)]'>
            <ContentWrapper>
                <div className='text-xs text-[#888]'> Mobiux &#x2022; Starter Project &#x2022; Nextjs Tailwind </div>
            </ContentWrapper>
        </footer>
    )
}

export default DefaultFooter