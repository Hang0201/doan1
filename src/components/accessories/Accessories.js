import React from 'react';
import AccessoriesDetail from './AccessoriesDetail';

function Accessories() {
    return(
        <div className='mt-[20px] w-3/4 mr-auto ml-auto'>
            <div className='flex'>
                <div className='mr-[10px] text-[20px] text-red-600'>
                    <i className="fa-solid fa-headphones-simple"></i>
                </div>
                <h2>Phụ kiện</h2>
            </div>
            <AccessoriesDetail />
        </div>
    )
}

export default Accessories