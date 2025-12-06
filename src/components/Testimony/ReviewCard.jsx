import React from 'react'
import { getImageUrl } from "../../utils";
const ReviewCard = ({ content, src }) => {
    return (
        <div className='flex shadow-md p-4 gap-4 rounded bg-white max-w-[450px] m-auto'>
            <div className="content text-sm font-light">
                {content}
                <br />
               <div className='text-yellow-500 text-xl'>
               <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
               </div>
            </div>

            <div className="customer-image text-center capitalize">
                <img src={getImageUrl(`customers/${src}.jpg`)} alt={src} className='max-w-[150px] mb-2' />
                <i>{src}</i>
                <p>CEO</p>
            </div>
        </div>
    )
}

export default ReviewCard